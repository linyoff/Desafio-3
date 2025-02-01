import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0;
  
  h1 {
    font-size: 16px;
  }
`;

const IconButton = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

export const StyledHeader = {
    Container,
    IconButton
}