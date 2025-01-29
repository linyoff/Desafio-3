import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCard from "../components/ProductCard";
import { Product } from "../utils/productService";
import { getPopularProducts } from "../utils/calcs";
import { StyledCarousel } from "../styles/components/carousel-styles";

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
            centeredSlides={true}  //centraliza o conteudo
            slidesPerView="auto" //ajusta a largura dos slides
            breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 22 }, //para telas menores
                1024: { slidesPerView: 3, spaceBetween: 22 }, //para tablets
                1440: { slidesPerView: 4, spaceBetween: 32 }, //para desktops
            }}
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