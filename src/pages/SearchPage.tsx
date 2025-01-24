import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart, ChevronLeft } from 'react-feather';
import { fetchProducts, Product } from "../utils/productService";
import { StyleSearchPage } from "../styles/pages/search-page-styles";
import InputField from "../components/InputField";
import ProdCardSearch from "../components/ProdCardSearch";

const SearchPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  const handleCart = () => navigate('/ShoppingCart');

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
    <StyleSearchPage.Container>
      <StyleSearchPage.Header>
        <StyleSearchPage.BackButton>{
          <ChevronLeft size={24} />
        }</StyleSearchPage.BackButton>
        <h1>Search</h1>
        <StyleSearchPage.CartButton onClick={handleCart}>{
          <ShoppingCart size={24} />
        }</StyleSearchPage.CartButton>
      </StyleSearchPage.Header>

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
            key={featuredProduct.id}
            product={featuredProduct}
          />
        </div>
      )}

      <StyleSearchPage.SectionTitle>Popular product</StyleSearchPage.SectionTitle>
      {products.map((product) => (
        <ProdCardSearch
          key={product.id}
          product={product}
        />
      ))}
    </StyleSearchPage.Container>
  );
};

export default SearchPage;

