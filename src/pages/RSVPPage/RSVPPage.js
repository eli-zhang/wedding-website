import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import {
  RSVPContainer, StepContainer, QuestionTitle, FormTitle,
  StyledInput, FormContainer, FormGroup, FormLabel,
  StyledSelect, SubmitButton, StyledTextArea, HelperText
} from './styled';

function RSVPPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [formData, setFormData] = useState({
    attendance: 'I can make it',
    guestCount: 'No, just me',
    guests: '',
    dietary: '',
    questions: ''
  });

  const handleNameSubmit = (e) => {
    if (e.key === 'Enter' && name.trim()) {
      setStep(2);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No-op for now
    console.log('Form submitted:', { name, ...formData });
    alert("Thanks for RSVPing! (This is a demo)");
  };

  return (
    <>
      <NavBar tab={"RSVP"} />
      <RSVPContainer>
        {step === 1 && (
          <StepContainer>
            <QuestionTitle>What's your name?</QuestionTitle>
            <StyledInput
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleNameSubmit}
              autoFocus
            />
            <HelperText>Press enter (↵) to continue</HelperText>
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
                >
                  <option value="I can make it">I can make it</option>
                  <option value="I can't make it">I can't make it</option>
                </StyledSelect>
              </FormGroup>

              <FormGroup>
                <FormLabel>Are you bringing any additional guests?</FormLabel>
                <StyledSelect
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                >
                  <option value="No, just me">No, just me</option>
                  <option value="1 additional guest">1 additional guest</option>
                  <option value="2 additional guests">2 additional guests</option>
                  <option value="3 additional guests">3 additional guests</option>
                </StyledSelect>
              </FormGroup>

              {formData.guestCount !== 'No, just me' && (
                <FormGroup>
                  <FormLabel>Name of additional guests in your party</FormLabel>
                  <StyledInput
                    as="input" // Reusing StyledInput style but maybe needs alignment
                    style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '10px' }}
                    name="guests"
                    placeholder="Justin Time, Chris P. Bacon, etc."
                    value={formData.guests}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              )}

              <FormGroup>
                <FormLabel>Any dietary restrictions?</FormLabel>
                <StyledInput
                  as="input"
                  style={{ textAlign: 'left', borderBottom: '1px solid #ddd', padding: '10px' }}
                  name="dietary"
                  placeholder="e.g. Vegetarian, Gluten-free..."
                  value={formData.dietary}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>Any other questions?</FormLabel>
                <StyledTextArea
                  name="questions"
                  placeholder="Let us know and we'll be happy to get back to you!"
                  value={formData.questions}
                  onChange={handleInputChange}
                />
              </FormGroup>

              <SubmitButton type="submit">Submit RSVP</SubmitButton>
            </FormContainer>
          </StepContainer>
        )}
      </RSVPContainer>
    </>
  );
}

export default RSVPPage;
