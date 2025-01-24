import React from 'react';
import styled from 'styled-components';
import { Product } from '../utils/productService';

export interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
    <StyledProductCard key={product.id}>
        <ProductImage src={product.img} alt={product.name} />
        <h4>{product.name}</h4>
        <p>USD {product.price.toFixed(2)}</p>
    </StyledProductCard>
);

export default ProductCard;

const StyledProductCard = styled.div`
  text-align: center;
  padding: 10px;
  background-color: var(--colorsWhite);
  border-radius: 20px;

  h4 {
    font-weight: 500;
    font-size: 14px;
  }

  p {
    font-weight: 800;
    font-size: 12px;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;
