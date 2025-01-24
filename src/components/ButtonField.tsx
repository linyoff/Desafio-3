import React from "react";
import { StyledButton } from "../styles/components/button-styles";

interface ButtonProps {
    typeButton: "button" | "submit" | "reset";
    text: string;
}

const ButtonField: React.FC<ButtonProps> = ({ typeButton, text }) => {
    return (
        <StyledButton type={typeButton}>
            {text}
        </StyledButton>
    );
}

export default ButtonField;

