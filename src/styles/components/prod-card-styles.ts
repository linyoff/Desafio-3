import styled from 'styled-components';

export const StyledProductCard = styled.div<{ $rating: boolean }>`
  width: 160px;
  position: relative;
  height: ${({ $rating }) => ($rating ? '245px' : '220px')}; /*aumenta a altura se o rating for ativado */
  text-align: start;
  padding: 10px;
  background-color: var(--colorsWhite);
  border-radius: 20px;

  h4 {
    font-weight: 500;
    margin-top: 5px;
    font-size: 14px;
  }

  > p:first-of-type {
    font-weight: 800;
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const ProductImage = styled.img`
  width: 125px;
  height: 125px;
`;

export const Rating = styled.div`
  display: flex;
  position: absolute;
  bottom: 8px; 
  left: 10px; 
  align-items: center;
  font-size: 12px;
  gap: 10px;
  margin: 10px 0;
  font-weight: 300;
  
  
  svg {
    margin-right: 4px;
  }
`;