import styled from "styled-components";

const Container = styled.div`
  padding: 30px 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h1 {
    font-size: 16px;
  }

`;

const BackButton = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

const CartButton = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

export const StyleSearchPage = {
    Container,
    Header,
    BackButton,
    CartButton,
    SectionTitle
}