import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledBackButton } from "../styles/components/back-button-styles";
import { ChevronLeft } from "react-feather";

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledBackButton onClick={() => navigate(-1) /*-1 volta para a tela anterior*/}>
        <ChevronLeft size={24} />
    </StyledBackButton>
  );
};

export default BackButton;
