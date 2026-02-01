import styled from "styled-components";
import { accentColor, accentColorBlue, accentColorLighter, mobileBreakpoint } from "../../constants";

export const RSVPContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: ${mobileBreakpoint}) {
        padding: 60px 20px;
    }
`

export const StepContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.centered ? 'center' : 'flex-start'};
    gap: 40px;
    animation: fadeIn 0.5s ease-in;
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`

export const QuestionTitle = styled.h2`
    font-family: 'Gabarito', sans-serif;
    font-size: 4rem;
    color: ${accentColor};
    text-align: left;
    font-weight: 500;

    @media (max-width: ${mobileBreakpoint}) {
        font-size: 2.5rem;
    }
`

export const FormTitle = styled.h1`
    font-family: 'Gabarito', sans-serif;
    font-size: 2.5rem;
    color: ${accentColor};
    text-align: left;
    margin-bottom: 30px;
    font-weight: 500;
`

export const StyledInput = styled.input`
    width: 100%;
    max-width: ${props => props.large ? '1000px' : '500px'};
    padding: 15px 0;
    border: none;
    border-bottom: 2px solid #ccc;
    font-family: 'Jost', sans-serif;
    font-size: ${props => props.large ? '2.5rem' : '1.5rem'};
    color: #333;
    background: transparent;
    text-align: left;
    transition: border-color 0.3s;

    @media (max-width: ${mobileBreakpoint}) {
        font-size: ${props => props.large ? '2rem' : '1.2rem'};
    }

    &:focus {
        outline: none;
        border-bottom-color: ${accentColorBlue};
    }

    &::placeholder {
        color: #aaa;
    }
`

export const FormContainer = styled.form`
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
`

export const FormLabel = styled.label`
    font-family: 'Jost', sans-serif;
    font-size: 1.1rem;
    color: #555;
    font-weight: 500;
`

export const StyledSelect = styled.select`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: 'Jost', sans-serif;
    font-size: 1rem;
    color: #333;
    background-color: white;

    &:focus {
        outline: none;
        border-color: ${accentColor};
    }
`

export const StyledTextArea = styled.textarea`
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: 'Jost', sans-serif;
    font-size: 1rem;
    color: #333;
    min-height: 100px;
    resize: vertical;

    &:focus {
        outline: none;
        border-color: ${accentColor};
    }
`

export const SubmitButton = styled.button`
    padding: 15px 40px;
    background-color: ${accentColor};
    color: white;
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;
    border: none;
    cursor: pointer; // Fixed from 'cursor: pointer' inside hover
    align-self: center;
    margin-top: 20px;
    text-transform: uppercase;
    transition: background-color 0.3s;
    letter-spacing: 1px;

    &:hover {
        background-color: ${accentColorBlue};
        cursor: pointer;
    }
`

export const HelperText = styled.p`
    font-family: 'Jost', sans-serif;
    font-size: 0.9rem;
    color: #888;
    margin-top: 10px;
`

export const ThankYouMessage = styled.p`
    font-family: 'Jost', sans-serif;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
    line-height: 1.6;
    margin-bottom: 30px;
`

export const BackHomeButton = styled.button`
    padding: 15px 40px;
    background-color: transparent;
    color: ${accentColor};
    font-family: 'Jost', sans-serif;
    font-size: 1.2rem;
    border: 1px solid ${accentColor};
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.3s;
    letter-spacing: 1px;

    &:hover {
        background-color: ${accentColor};
        color: white;
    }
`

export const PasswordInputWrapper = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 20px;
    animation: slideDownFadeIn 0.5s ease-out forwards;
    overflow: hidden;

    @keyframes slideDownFadeIn {
        from {
            opacity: 0;
            max-height: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            max-height: 200px;
            transform: translateY(0);
        }
    }
`
