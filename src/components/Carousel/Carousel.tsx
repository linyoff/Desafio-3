import React from "react";
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCard from "../Product Card/ProductCard";
import { Product } from "../../utils/productService";
import { getPopularProducts } from "../../utils/calcs";
import { StyledCarousel } from "./carousel-styles";

interface CarouselProps {
    products: Product[];
}

const Carousel: React.FC<CarouselProps> = ({ products }) => {

    //pegando produtos mais populares para exibir no segundo carrossel 
    const popular = getPopularProducts(products, 8);

    return (
        <StyledCarousel
            spaceBetween={22} //espaço entre os slides
            pagination={{ clickable: true }}
            modules={[Pagination]} >
            {popular.map((product) => (
                <SwiperSlide key={product.id}>
                    <ProductCard product={product} rating={false} />
                </SwiperSlide>
            ))}
        </StyledCarousel>
    );
};

export default Carousel;