import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "react-feather";
import HeaderCostum from "../components/HeaderCostum";
import { fetchProducts, Product } from "../utils/productService";
import { StyleSearchPage } from "../styles/pages/search-page-styles";
import { getPopularProducts } from "../utils/calcs";
import InputField from "../components/InputField";

import ProdCardSearch from "../components/ProdCardSearch";

const SearchPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [popularProducts, setPopularProducts] = useState<Product[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  const navigate = useNavigate();

  const handleCart = () => navigate("/shopping-cart");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (data.length > 0) {
          setProducts(data);

          const popular = getPopularProducts(data, 3);
          setPopularProducts(popular);

        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  useEffect(() => {
    //filtrar produtos pelo texto de busca
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText, products]);

  return (
    <StyleSearchPage.Container>

      <HeaderCostum
        icon={
          <ShoppingCart size={24}/>
        }
        text="Search" 
        onClick={handleCart}
      />

      <InputField
        type="text"
        placeholder="Search headphone"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        icon={<Search className="icon" size={20} />}
      />

      {searchText ? (
        <StyleSearchPage.SearchedProd>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProdCardSearch key={product.id} product={product} />
            ))
          ) : (
            <p>Sem resultados</p>
          )}
        </StyleSearchPage.SearchedProd>
      ) : (
        <p>Digite para começar a busca</p>
      )}

      <StyleSearchPage.PopularProd>
        <h2>Popular Products</h2>
        {popularProducts.map((product) => (
          <ProdCardSearch key={product.id} product={product} />
        ))}
      </StyleSearchPage.PopularProd>

    </StyleSearchPage.Container>
  );
};

export default SearchPage;
