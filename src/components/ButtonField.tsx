import React from "react";
import { StyledButton } from "../styles/components/button-styles";

interface ButtonProps {
    typeButton: "button" | "submit" | "reset";
    text: string;
    onClick?: () => void;
}

const ButtonField: React.FC<ButtonProps> = ({ typeButton, text, onClick }) => {
    return (
        <StyledButton type={typeButton} onClick={onClick}>
            {text}
        </StyledButton>
    );
}

export default ButtonField;

