import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, Search } from 'react-feather';
import { fetchProducts, Product } from '../utils/productService';
import styled from 'styled-components';
import logo from '../images/Logo.png';
import InputField from '../components/InputField';
import ProductCard from '../components/ProductCard';
import CategoryButton from '../components/CategoryButton';
import Banner from '../components/Banner';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location.state?.username; //variavel para receber o nome do usuário

  //variaveis de controle de estado e funcoes para atualizar estado
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setfeaturedProduct] = useState<Product | null>(null);

  //carregar os dados após o componente já ser montado
  useEffect(() => {
    //carregando os produtos por função assincrona 
    const loadProducts = async () => {
      try {
        //chamando função de requisao dos dados na api
        const data = await fetchProducts();
        if (data.length > 0) {
          setProducts(data); //armazenando os dados obtidos
          setfeaturedProduct(data[0]); //definindo primeiro produto como destaque
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  //variaveis para rota
  const handleLogout = () => navigate('/Login');
  const navigateToSearch = () => navigate('/SearchPage');

  return (
    <Container>
      <Header>
        <Nav>
          <MenuIcon />
          <Logo src={logo} alt="Logo" />
          <Avatar src="" alt="User Avatar" />
        </Nav>
      </Header>

      <Main>
        <Greeting>Hi, {username}</Greeting>
        <Subheading>What are you looking for today?</Subheading>

        <InputField
          type="text"
          placeholder="Search headphone"
          onClick={navigateToSearch} //chama a função ao clicar
          icon={<Search className="icon" size={20} />}
          clickable //define como clicável
        />

        <ContainerProducts>
          <Categories>
            <CategoryButton
              text="Headset"
            />
            <CategoryButton
              text="Headphone"
            />
          </Categories>

          {featuredProduct && (
            <CarouselFeatProduct>
              <Banner
                product={featuredProduct}
              />
            </CarouselFeatProduct>
          )}

          <FeaturedProducts>
            <SectionHeader>
              <h3>Featured Products</h3>
              <a href="#">See All</a>
            </SectionHeader>
            <ProductGrid>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </FeaturedProducts>
        </ContainerProducts>

        <button onClick={handleLogout}>Sair</button>
      </Main>
    </Container>
  );
};

export default Home;

//estilização usando styled components
const Container = styled.div`
  background-color: var(--colorsWhite);
  color: var(--colorsDefault);
`;

const Header = styled.header`
  padding: 30px 20px 10px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuIcon = styled(Menu)`
  cursor: pointer;
`;

const Logo = styled.img`
  height: 30px;
  margin: 0 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const Main = styled.main`
  padding: 0 20px;
`;

const Greeting = styled.h1`
  font-size: 17px;
  margin-top: 20px;
  font-weight: 500;
`;

const Subheading = styled.h2`
  font-size: 25px;
  font-weight: bold;
  margin-top: 10px;
`;

const ContainerProducts = styled.div`
  background-color: var(--colorsGreyLight_1);
  border-radius: 35px;
`;


const Categories = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const CarouselFeatProduct = styled.div`
  
`;

const FeaturedProducts = styled.section`
  margin-top: 20px;
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 18px;
    font-weight: 400;
  }

  a {
    font-size: 14px;
    color: var(--colorsGreyDark_1);
    text-decoration: none;
  }
`;

const ProductGrid = styled.div`
  display: flex;
  flex-direction: inline;
  gap: 15px;
  margin-top: 20px;
`;





