import React from 'react';
import styled from 'styled-components';
import { Star } from 'react-feather';
import { Product } from '../utils/productService';
import { ProductCardProps } from '../components/ProductCard';

//calcula a média de avalição do produto
const calculateRating = (reviews: Product["reviews"]) => {
  //vai iterar em todos os reviews, começando em 0, sum é o acumulador e review o valor atual
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return reviews.length ? (total / reviews.length).toFixed(1) : "N/A";
};

const ProdCardSearch: React.FC<ProductCardProps> = ({ product }) => (
  
    <StyledProdCard>
      <ProductImage src={product.img} alt={product.name} />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>USD {product.price}</ProductPrice>
        <ProductRating>
          <Star color="var(--colorsAccent)" size={20} />
          {calculateRating(product.reviews)} {product.reviews.length} Reviews
        </ProductRating>
      </ProductInfo>
      <OptionsButton>{"⋮"}</OptionsButton>
    </StyledProdCard>
  );
  
  export default ProdCardSearch;
  
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