import React from 'react';
import { useNavigate } from "react-router-dom";
import { Star, MoreVertical } from 'react-feather';
import { calculateRating } from '../utils/calcs';
import { ProductProp } from '../components/ProductCard';
import { ProdCardStyles } from '../styles/components/prod-search-styles';

const ProdCardSearch: React.FC<ProductProp> = ({ product }) => {
  
  const navigate = useNavigate();

  const handleCardClick = () => {
    //página de detalhes do produto
    //navigate(`/ProductDetail/${product.id}`);
  };

  return (
    <ProdCardStyles.StyledProdCard onClick={handleCardClick}>

      <ProdCardStyles.ProductImage src={product.img} alt={product.name} />
      <ProdCardStyles.ProductInfo>

        <ProdCardStyles.ProductName>{product.name}</ProdCardStyles.ProductName>
        <ProdCardStyles.ProductPrice>USD {product.price}</ProdCardStyles.ProductPrice>

        <ProdCardStyles.ProductRating>
          <Star color="var(--colorsAccent)" size={20} />
          {calculateRating(product.reviews)} {product.reviews.length} Reviews
        </ProdCardStyles.ProductRating>

      </ProdCardStyles.ProductInfo>

      <ProdCardStyles.OptionsButton>

        <MoreVertical color="var(--colorsGreyDark_1)"/>
      </ProdCardStyles.OptionsButton>
    </ProdCardStyles.StyledProdCard>

  );
};
  
  
export default ProdCardSearch;