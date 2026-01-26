import styled from "styled-components";
import { accentColor, accentColorBlue, accentColorLighter, mobileBreakpoint } from "../../constants";

export const RSVPContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 100px 20px;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${mobileBreakpoint}) {
        padding: 60px 20px;
    }
`

export const StepContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    animation: fadeIn 0.5s ease-in;
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
`

export const QuestionTitle = styled.h2`
    font-family: 'Gabarito', sans-serif;
    font-size: 3rem;
    color: ${accentColor};
    text-align: center;
    font-weight: 500;
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
    max-width: 400px;
    padding: 15px 0;
    border: none;
    border-bottom: 2px solid #ccc;
    font-family: 'Jost', sans-serif;
    font-size: 1.5rem;
    color: #333;
    background: transparent;
    text-align: left;
    transition: border-color 0.3s;

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
