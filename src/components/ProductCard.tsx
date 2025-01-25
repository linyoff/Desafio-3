import React from 'react';
import { Product } from '../utils/productService';
import { useNavigate } from "react-router-dom";
import { StyledProductCard, ProductImage } from '../styles/components/prod-card-styles';

export interface ProductProp {
    product: Product;
}

const ProductCard: React.FC<ProductProp> = ({ product }) => {

    const navigate = useNavigate();
    
      const handleCardClick = () => {
        //página de detalhes do produto
        //navigate(`/ProductDetail/${product.id}`);
      };

    return (
        <StyledProductCard key={product.id} onClick={handleCardClick}>
            <ProductImage src={product.img} alt={product.name} />
            <h4>{product.name}</h4>
            <p>USD {product.price.toFixed(2)}</p>
        </StyledProductCard>
    );
};

export default ProductCard;