import React from 'react';
import { Star, MoreVertical } from 'react-feather';
import { Product } from '../utils/productService';
import { ProductProp } from '../components/ProductCard';
import { ProdCardStyles } from '../styles/components/prod-search-styles';

//calcula a média de avalição do produto
const calculateRating = (reviews: Product["reviews"]) => {
  //vai iterar em todos os reviews, começando em 0, sum é o acumulador e review o valor atual
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return reviews.length ? (total / reviews.length).toFixed(1) : "N/A";
};

const ProdCardSearch: React.FC<ProductProp> = ({ product }) => (
  
    <ProdCardStyles.StyledProdCard>
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
  
export default ProdCardSearch;