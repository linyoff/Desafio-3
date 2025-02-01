import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  margin: 18px 0;
  font-weight: bold;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  border: 1px solid var(--colorsGrey);
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  background: none;
  gap: 8px;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 20px 0;
  justify-items: center;
  align-items: center;
`;

const ContainerProducts = styled.div`
  background-color: var(--colorsGreyLight_1);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 20px;
  margin-top: 25px;
  overflow: hidden;
`;

export const StyledExploreProd = {
    Container,
    Header,
    Title,
    FilterButton,
    ProductGrid,
    ContainerProducts
};