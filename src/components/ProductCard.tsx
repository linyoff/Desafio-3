import React from 'react';
import { Product } from '../utils/productService';
import { StyledProductCard, ProductImage } from '../styles/components/prod-card-styles';

export interface ProductProp {
    product: Product;
}

const ProductCard: React.FC<ProductProp> = ({ product }) => (
    <StyledProductCard key={product.id}>
        <ProductImage src={product.img} alt={product.name} />
        <h4>{product.name}</h4>
        <p>USD {product.price.toFixed(2)}</p>
    </StyledProductCard>
);

export default ProductCard;