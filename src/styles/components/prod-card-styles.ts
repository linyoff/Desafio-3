import styled from 'styled-components';

export const StyledProductCard = styled.div`
  width: 155px;
  height: 215px;
  text-align: start;
  padding: 10px;
  background-color: var(--colorsWhite);
  border-radius: 20px;

  h4 {
    font-weight: 500;
    margin-top: 5px;
    font-size: 14px;
  }

  p {
    font-weight: 800;
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const ProductImage = styled.img`
  width: 125px;
  height: 125px;
`;