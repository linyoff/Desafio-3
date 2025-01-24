import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search, ShoppingCart, ChevronLeft, Star } from 'react-feather';
import { fetchProducts, Product } from "../utils/productService";
import InputField from "../components/InputField";

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

  const calculateRating = (reviews: Product["reviews"]) => {
    const total = reviews.reduce((sum, review) => sum + review.rating, 0);
    return reviews.length ? (total / reviews.length).toFixed(1) : "N/A";
  };

  return (
    <Container>
      <Header>
        <BackButton>{
          <ChevronLeft/>
          }</BackButton>
        <h1>Search</h1>
        <CartButton>{
          <ShoppingCart
          />
          }</CartButton>
      </Header>

      <InputField
          type="text"
          placeholder="Search headphone"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          icon= {<Search className="icon" size={20} />}
        />

      {featuredProduct && (
        <div>
          <ProductCard>
            <ProductImage src={featuredProduct.img} alt={featuredProduct.name} />
            <ProductInfo>
              <ProductName>{featuredProduct.name}</ProductName>
              <ProductPrice>USD {featuredProduct.price}</ProductPrice>
              <ProductRating>
                <Star color="var(--colorsAccent)" size={20}/>
                {calculateRating(featuredProduct.reviews)} ({featuredProduct.reviews.length} Reviews)
              </ProductRating>
            </ProductInfo>
            <OptionsButton>{"⋮"}</OptionsButton>
          </ProductCard>
        </div>
      )}

      <SectionTitle>Popular product</SectionTitle>
      {products.map((product) => (
        <ProductCard key={product.id}>
          <ProductImage src={product.img} alt={product.name} />
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>USD {product.price}</ProductPrice>
            <ProductRating>
            <Star color="var(--colorsAccent)" size={20}/>
              {calculateRating(product.reviews)} ({product.reviews.length} Reviews)
            </ProductRating>
          </ProductInfo>
          <OptionsButton>{"⋮"}</OptionsButton>
        </ProductCard>
      ))}
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
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

const ProductCard = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ProductImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductName = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: #555;
`;

const ProductRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #777;
`;

const OptionsButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
`;
