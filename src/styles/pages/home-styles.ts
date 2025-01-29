import styled from 'styled-components';
import { Swiper } from "swiper/react";
import { Menu } from 'react-feather';

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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

const ContainerHead = styled.main`
  padding: 0 24px;
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
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  padding: 20px;
  margin-top: 25px;
  overflow: hidden;
`;

const Categories = styled.div`
  display: flex;
  gap: 10px;
`;

const CarouselFeatProduct = styled(Swiper)`
  margin-top: 20px;

  .swiper-wrapper {
    display: flex;
    align-items: center;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-pagination-bullet {
    background: var(--colorsDefault);
  }
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

  button {
    background: none;
    border: none;
    font-size: 14px;
    color: var(--colorsGreyDark_1);
    text-decoration: none;
  }
`;

export const StyleHome = {
  Container,
  Header,
  Nav,
  MenuIcon,
  Logo,
  Avatar,
  ContainerHead,
  Greeting,
  Subheading,
  ContainerProducts,
  Categories,
  CarouselFeatProduct,
  FeaturedProducts,
  SectionHeader
}