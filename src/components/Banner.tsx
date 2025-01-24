import React from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'react-feather';
import { Product } from '../utils/productService';

interface BannerProps {
    product: Product;
}

const Banner: React.FC<BannerProps> = ({product}) => (
    <StyledBanner>
        <ProductTitle>{product.name}</ProductTitle>
        <ProductImage src={product.img} alt={product.name} />
        <ShopNow>
            <a href="">Shop now</a>
            <ArrowRight />
        </ShopNow>
    </StyledBanner>
);

export default Banner;

const StyledBanner = styled.div`
  display: flex;
  width: 320px;
  height: 180px;
  margin-top: 20px;
  padding: 10px;
  background-color: var(--colorsWhite);
  border-radius: 20px;
`;

const ShopNow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: var(--colorsGreen);
  font-weight: bold;
  margin-top: 10px;

  a {
    color: var(--colorsGreen);
    text-decoration: none;
  }
`;

const ProductTitle = styled.h3`
  font-size: 18px;
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-top: 10px;
`;