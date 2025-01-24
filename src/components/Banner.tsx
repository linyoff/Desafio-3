import React from "react";
import { ArrowRight } from "react-feather";
import { ProductProp } from '../components/ProductCard';
import { BannerStyles } from "../styles/components/banner-styles"; //import dos estilos agrupados

const Banner: React.FC<ProductProp> = ({ product }) => (
  <BannerStyles.StyledBanner>

    <BannerStyles.ContentWrapper>
      <BannerStyles.ProductTitle>{product.name}</BannerStyles.ProductTitle>
      <BannerStyles.ShopNow>
        <a href="">Shop now</a>
        <ArrowRight size={20}/>
      </BannerStyles.ShopNow>
    </BannerStyles.ContentWrapper>

    <BannerStyles.ProductImage src={product.img} alt={product.name} />
  </BannerStyles.StyledBanner>
);

export default Banner;