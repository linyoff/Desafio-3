import React from 'react';
import { useNavigate } from "react-router-dom";
import { ProductProp } from '../utils/productService';
import { Star, MoreVertical } from 'react-feather';
import { calculateRating } from '../utils/calcs';
import { ProdCardStyles } from '../styles/components/prod-search-styles';

const ProdCardSearch: React.FC<ProductProp> = ({ product }) => {

  const navigate = useNavigate();

  const handleCardClick = () => {
    //página de detalhes do produto
    navigate(`/product-detail/${product.id}`);
  };

  return (
    <ProdCardStyles.StyledProdCard onClick={handleCardClick}>

      <ProdCardStyles.ProductImage src={product.img} alt={product.name} />
      <ProdCardStyles.ProductInfo>

        <ProdCardStyles.ProductName>{product.name}</ProdCardStyles.ProductName>
        <ProdCardStyles.ProductPrice>USD {product.price}</ProdCardStyles.ProductPrice>

        <ProdCardStyles.ProductRating>
          <p>
            <Star color="var(--colorsAccent)" size={10} />
            {calculateRating(product.reviews)}
          </p>
          <p>{product.reviews.length} Reviews</p>
        </ProdCardStyles.ProductRating>

      </ProdCardStyles.ProductInfo>

      <ProdCardStyles.OptionsButton>

        <MoreVertical color="var(--colorsGreyDark_1)" />
      </ProdCardStyles.OptionsButton>
      
    </ProdCardStyles.StyledProdCard>

  );
};


export default ProdCardSearch;