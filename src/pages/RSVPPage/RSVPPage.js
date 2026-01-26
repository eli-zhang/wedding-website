import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
  RSVPContainer, StepContainer, QuestionTitle, FormTitle,
  StyledInput, FormContainer, FormGroup, FormLabel,
  StyledSelect, SubmitButton, StyledTextArea, HelperText,
  ThankYouMessage, BackHomeButton
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
  const [allowedPlusOnes, setAllowedPlusOnes] = useState(0);

  const [formData, setFormData] = useState({
    attendance: 'attending',
    plus_one_names: '',
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
          plus_one_names: Array.isArray(data.plus_one_names) ? data.plus_one_names.join(', ') : (data.plus_one_names || ''),
          dietary_restrictions: data.dietary_restrictions || '',
          questions: data.questions || ''
        });
        setAllowedPlusOnes(data.allowed_plus_ones || 0);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      const { status, data } = await updateRSVP(name, password, formData);

      if (status === 200) {
        setStep(3);
      } else {
        setErrorMessage(data.error || 'Failed to update RSVP.');
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
              />
              {isPasswordRequired && (
                <>
                  <QuestionTitle style={{ marginTop: '20px' }}>Password Required</QuestionTitle>
                  <StyledInput
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                    disabled={isLoading}
                  />
                </>
              )}
              {errorMessage && <HelperText style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</HelperText>}
              <HelperText>Press enter (↵) to continue</HelperText>
              <button type="submit" style={{ display: 'none' }} disabled={isLoading}>Check</button>
            </form>
          </StepContainer>
        )}

        {step === 2 && (
          <StepContainer>
            <FormTitle>RSVP for Francesca & Eli's Wedding</FormTitle>
            <FormContainer onSubmit={handleSubmit}>
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
                </StyledSelect>
              </FormGroup>

              {allowedPlusOnes > 0 && (
                <FormGroup>
                  <FormLabel>Name of additional guests in your party (you can bring up to {allowedPlusOnes} plus one{allowedPlusOnes > 1 ? 's' : ''})</FormLabel>
                  <StyledInput
                    as="input"
                    style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '10px' }}
                    name="plus_one_names"
                    placeholder="Justin Time, Chris P. Bacon, etc."
                    value={formData.plus_one_names}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                  <HelperText>Separate names with commas</HelperText>
                </FormGroup>
              )}

              <FormGroup>
                <FormLabel>Any dietary restrictions?</FormLabel>
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
                <FormLabel>Any other questions?</FormLabel>
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
          <StepContainer>
            <QuestionTitle>Thanks for RSVPing!</QuestionTitle>
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
