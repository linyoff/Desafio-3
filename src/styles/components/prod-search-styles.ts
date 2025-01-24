import styled from 'styled-components';

const StyledProdCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
`;

const ProductInfo = styled.div`
  flex: 8;
`;

const ProductName = styled.h3`
  font-size: 16px;
    font-weight: 400;
    margin: 0;
  `;

const ProductPrice = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin: 4px 0;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  
  svg {
    margin-right: 4px;
  }
`;

const OptionsButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
`;

export const ProdCardStyles = {
  StyledProdCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice, 
  ProductRating, 
  OptionsButton,
};