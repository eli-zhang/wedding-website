import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
  RSVPContainer, StepContainer, QuestionTitle,
  StyledInput, FormContainer, FormGroup, FormLabel,
  StyledSelect, SubmitButton, StyledTextArea, HelperText,
  ThankYouMessage, BackHomeButton, PasswordInputWrapper
} from './styled';
import { checkRSVP, updateRSVP } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function RSVPPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordRequired, setIsPasswordRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    attendance: 'attending',
    party_members: [],
    dietary_restrictions: '',
    questions: ''
  });

  const handleCheckRSVP = async (e) => {
    if (e) e.preventDefault();
    if (!name.trim()) return;

    setIsLoading(true);
    setErrorMessage('');

    try {
      const { status, data } = await checkRSVP(name, password);

      if (status === 200) {
        setFormData({
          attendance: data.rsvp_status || 'attending',
          party_members: data.party_members || [],
          dietary_restrictions: data.dietary_restrictions || '',
          questions: data.questions || ''
        });
        if (data.name) setName(data.name);
        setStep(2);
      } else if (status === 401) {
        if (data.error === 'Password required') {
          setIsPasswordRequired(true);
        } else {
          setErrorMessage('Invalid password. Please try again.');
        }
      } else if (status === 404) {
        setErrorMessage("We couldn't find your name in our list. Reach out to Eli and Francesca if you need any help.");
      } else {
        setErrorMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection.');
      console.error('Error checking RSVP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePartyMemberChange = (index, value) => {
    setFormData(prev => {
      const newPartyMembers = [...prev.party_members];
      newPartyMembers[index] = { ...newPartyMembers[index], rsvp_status: value };
      return { ...prev, party_members: newPartyMembers };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // 1. Update primary guest
      const updateRequests = [
        updateRSVP(name, password, {
          attendance: formData.attendance,
          dietary_restrictions: formData.dietary_restrictions,
          questions: formData.questions
        })
      ];

      // 2. Update other party members who are not "pending"
      formData.party_members.forEach(member => {
        if (member.rsvp_status !== 'pending') {
          updateRequests.push(
            updateRSVP(member.name, password, {
              attendance: member.rsvp_status,
            })
          );
        }
      });

      const results = await Promise.all(updateRequests);
      const allSuccessful = results.every(res => res.status === 200);

      if (allSuccessful) {
        setStep(3);
      } else {
        const failed = results.find(res => res.status !== 200);
        setErrorMessage(failed?.data?.error || 'Failed to update some RSVP statuses.');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
      console.error('Error updating RSVP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <NavBar tab={"RSVP"} />
      <RSVPContainer>
        {step === 1 && (
          <StepContainer>
            <QuestionTitle>What's your name?</QuestionTitle>
            <form onSubmit={handleCheckRSVP}>
              <StyledInput
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoFocus
                disabled={isLoading}
                large
              />
              {isPasswordRequired && (
                <PasswordInputWrapper>
                  <StyledInput
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    disabled={isLoading}
                    large
                  />
                </PasswordInputWrapper>
              )}
              {errorMessage && <HelperText style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</HelperText>}
              <HelperText>Press enter (↵) to continue</HelperText>
              <button type="submit" style={{ display: 'none' }} disabled={isLoading}>Check</button>
            </form>
          </StepContainer>
        )}

        {step === 2 && (
          <StepContainer centered>
            <FormContainer onSubmit={handleSubmit}>
              <HelperText style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.1rem', color: '#666' }}>
                You can change your RSVP status at any time until April 5th.
              </HelperText>
              <FormGroup>
                <FormLabel>Can you make it to the wedding?</FormLabel>
                <StyledSelect
                  name="attendance"
                  value={formData.attendance}
                  onChange={handleInputChange}
                  disabled={isLoading}
                >
                  <option value="attending">I can make it</option>
                  <option value="not_attending">I can't make it</option>
                  <option value="pending">Pending</option>
                </StyledSelect>
              </FormGroup>

              {formData.party_members.map((member, index) => (
                <FormGroup key={index}>
                  <FormLabel>Can {member.name} make it to the wedding?</FormLabel>
                  <StyledSelect
                    value={member.rsvp_status}
                    onChange={(e) => handlePartyMemberChange(index, e.target.value)}
                    disabled={isLoading}
                  >
                    <option value="attending">They can make it</option>
                    <option value="not_attending">They can't make it</option>
                    <option value="pending">Pending</option>
                  </StyledSelect>
                </FormGroup>
              ))}

              <FormGroup>
                <FormLabel>Any dietary restrictions? If the wedding cake contains alcohol, would you like to opt for an alcohol-free option?</FormLabel>
                <StyledInput
                  as="input"
                  style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '10px' }}
                  name="dietary_restrictions"
                  placeholder="e.g. Vegetarian, Gluten-free..."
                  value={formData.dietary_restrictions}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Any other questions? Any issues with finding lodging?</FormLabel>
                <StyledTextArea
                  name="questions"
                  placeholder="Let us know and we'll be happy to get back to you!"
                  value={formData.questions}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />
              </FormGroup>

              {errorMessage && <HelperText style={{ color: 'red', marginBottom: '10px' }}>{errorMessage}</HelperText>}
              <SubmitButton type="submit" disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Submit RSVP'}
              </SubmitButton>
            </FormContainer>
          </StepContainer>
        )}
        {step === 3 && (
          <StepContainer centered>
            <QuestionTitle style={{ textAlign: 'center' }}>Thanks for RSVPing!</QuestionTitle>
            <ThankYouMessage>
              You can update your RSVP status at any time.
            </ThankYouMessage>
            <BackHomeButton onClick={() => navigate('/')}>
              Back to home
            </BackHomeButton>
          </StepContainer>
        )}
      </RSVPContainer>
    </>
  );
}

export default RSVPPage;
