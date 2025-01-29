import React from "react";
import { ArrowRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import { ProductProp } from "../utils/productService";
import { BannerStyles } from "../styles/components/banner-styles"; //import dos estilos agrupados

const Banner: React.FC<ProductProp> = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    //página de detalhes do produto
    navigate(`/product-detail/${product.id}`);
  };

  return (
    <BannerStyles.StyledBanner>

      <BannerStyles.ContentWrapper>
        <BannerStyles.ProductTitle>{product.name}</BannerStyles.ProductTitle>
        <BannerStyles.ShopNow>
          <button onClick={ handleCardClick }>Shop now</button>
          <ArrowRight size={20} />
        </BannerStyles.ShopNow>
      </BannerStyles.ContentWrapper>

      <BannerStyles.ProductImage src={product.img} alt={product.name} />
    </BannerStyles.StyledBanner>
  );
};

export default Banner;