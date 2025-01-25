import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search } from 'react-feather';
import { fetchProducts, Product } from '../utils/productService';
import logo from '../images/Logo.png';
import userImg from '../images/user-img.png';
import { StyleHome } from '../styles/pages/home-styles';
import InputField from '../components/InputField';
import ProductCard from '../components/ProductCard';
import CategoryButton from '../components/CategoryButton';
import Banner from '../components/Banner';
import { SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { getPopularProducts } from "../utils/calcs";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username; //variavel para receber o nome do usuário

  //variaveis de controle de estado e funcoes para atualizar estado
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('headsets');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  //carregar os dados após o componente já ser montado
  useEffect(() => {
    //carregando os produtos por função assincrona 
    const loadProducts = async () => {
      try {
        //chamando função de requisao dos dados na api
        const data = await fetchProducts();
        if (data.length > 0) {
          setProducts(data); //armazenando os dados obtidos
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  //filtrando por category
  useEffect(() => {
    const filtered = products.filter((product) => product.category === category);
    setFilteredProducts(filtered);
  }, [category, products]);


  const handleCategoryClick = (category: string) => {
    setCategory(category); //atualiza a categoria ao clicar
  };

  //variaveis para rota
  //const handleLogout = () => navigate('/Login');
  const navigateToSearch = () => navigate('/SearchPage');

  //pegando produtos mais populares para exibir no segundo carrossel 
  const popular = getPopularProducts(products, 8);

  return (
    <StyleHome.Container>
      <StyleHome.Header>

        <StyleHome.Nav>
          <StyleHome.MenuIcon />
          <StyleHome.Logo src={logo} alt="Logo" />
          <StyleHome.Avatar src={userImg} alt="User Avatar" />
        </StyleHome.Nav>

      </StyleHome.Header>

      <StyleHome.ContainerHead>
        <StyleHome.Greeting>Hi, {username}</StyleHome.Greeting>
        <StyleHome.Subheading>What are you looking for today?</StyleHome.Subheading>

        <InputField
          type="text"
          placeholder="Search headphone"
          onClick={navigateToSearch} //chama a função ao clicar
          icon={<Search className="icon" size={20} />}
          clickable //define como clicável
        />
      </StyleHome.ContainerHead>

      <StyleHome.ContainerProducts>

        <StyleHome.Categories>
          <CategoryButton
            text="Headset"
            onClick={() => handleCategoryClick('headsets')}
          />
          <CategoryButton
            text="Headphone"
            onClick={() => handleCategoryClick('headphones')}
          />
        </StyleHome.Categories>

        {filteredProducts.length > 0 && (
          <StyleHome.CarouselFeatProduct
            spaceBetween={20}  //espaço entre o conteudo
            pagination={{ clickable: true }} 
            centeredSlides={true}  //centraliza o conteudo
            slidesPerView="auto" //ajusta a largura dos slides
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              1024: { slidesPerView: 2, spaceBetween: 20 },
              1440: { slidesPerView: 3, spaceBetween: 30 },
            }}
            modules={[Pagination]}  //módulo de paginação
          >
            {filteredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Banner product={product} />
              </SwiperSlide>
            ))}
          </StyleHome.CarouselFeatProduct>

        )}


        <StyleHome.FeaturedProducts>
          <StyleHome.SectionHeader>
            <h3>Featured Products</h3>
            <a href="#">See All</a>
          </StyleHome.SectionHeader>

          <StyleHome.ProductGridCarousel
            spaceBetween={22} //espaço entre os slides
            pagination={{ clickable: true }}
            centeredSlides={true}  //centraliza o conteudo
            slidesPerView="auto" //ajusta a largura dos slides
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 }, //para telas menores
              1024: { slidesPerView: 3, spaceBetween: 20 }, //para tablets
              1440: { slidesPerView: 4, spaceBetween: 30 }, //para desktops
            }}
            modules={[Pagination]} >
            {popular.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </StyleHome.ProductGridCarousel>

        </StyleHome.FeaturedProducts>

      </StyleHome.ContainerProducts>

      {/*<button onClick={handleLogout}>Sair</button>*/}

    </StyleHome.Container>
  );
};

export default Home;

