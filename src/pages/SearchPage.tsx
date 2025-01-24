import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, ShoppingCart, ChevronLeft } from 'react-feather';
import { fetchProducts, Product } from "../utils/productService";
import InputField from "../components/InputField";
import ProdCardSearch from "../components/ProdCardSearch";

const SearchPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (data.length > 0) {
          setProducts(data);
          setFeaturedProduct(data[0]);
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <Container>
      <Header>
        <BackButton>{
          <ChevronLeft size={24}/>
        }</BackButton>
        <h1>Search</h1>
        <CartButton>{
          <ShoppingCart size={24}/>
        }</CartButton>
      </Header>

      <InputField
        type="text"
        placeholder="Search headphone"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        icon={<Search className="icon" size={20} />}
      />

      {featuredProduct && (
        <div>
          <ProdCardSearch
            product={featuredProduct}
          />
        </div>
      )}

      <SectionTitle>Popular product</SectionTitle>
      {products.map((product) => (
        <ProdCardSearch
          product={product}
        />
      ))}
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  padding: 30px 24px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  
  h1 {
    font-size: 16px;
  }

`;

const BackButton = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

const CartButton = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
`;

