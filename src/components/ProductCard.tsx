import React from 'react';
import { useNavigate } from "react-router-dom";
import { Star } from 'react-feather';
import { Product } from '../utils/productService';
import { StyledProductCard, ProductImage, Rating } from '../styles/components/prod-card-styles';
import { calculateRating } from '../utils/calcs';

interface CardProp {
  product: Product;
  rating: boolean;
}

const ProductCard: React.FC<CardProp> = ({ product, rating }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    //página de detalhes do produto
    //navigate(`/ProductDetail/${product.id}`);
  };

  return (
    <StyledProductCard key={product.id} onClick={handleCardClick} $rating={rating}>
      <ProductImage src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>USD {product.price.toFixed(2)}</p>
      {rating && (
        <Rating>
          <p>
            <Star color="var(--colorsAccent)" size={10} />
            {calculateRating(product.reviews)}
          </p>
          <p>{product.reviews.length} Reviews</p>
        </Rating>
      )}
    </StyledProductCard>
  );
};

export default ProductCard;