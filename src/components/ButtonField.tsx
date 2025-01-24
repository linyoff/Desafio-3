import React from "react";
import styled from "styled-components";

interface ButtonProps {
    typeButton: "button" | "submit" | "reset";
    text: string;
}

const ButtonField: React.FC<ButtonProps> = ({ typeButton, text }) => {
    return (
        <LoginButton type={typeButton}>
            {text}
        </LoginButton>
    );
}

export default ButtonField;

//estilização usando styled components
const LoginButton = styled.button`
  width: 100%;
  height: 55px;
  padding: 12px;
  margin-top: 40px;
  background-color: var(--colorsGreen);
  border: none;
  border-radius: 10px;
  color: var(--colorsWhite);
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: var(--colorsGreenDark);
  }
`;