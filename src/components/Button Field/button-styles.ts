import styled from "styled-components";

//estilização usando styled components
export const StyledButton = styled.button`
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
