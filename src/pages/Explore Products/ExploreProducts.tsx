import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Product, fetchProducts } from "../../utils/productService";
import { Sliders } from "react-feather";
import ProductCard from "../../components/Product Card/ProductCard";
import { StyledExploreProd } from "./explore-prod-styles";
import HeaderCostum from "../../components/Header Costum/HeaderCostum";
import { ShoppingCart } from "react-feather";
import FilterModal from "../../components/Filter Modal/FilterModal";
import { getPopularProducts } from "../../utils/calcs";

const ExploreProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const navigate = useNavigate();

  const handleCart = () => navigate("/shopping-cart");

  const toggleFilterModal = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleFiltersApply = (filters: { sort: string[]; categories: string[] }) => {
    let updatedProducts = [...products];
  
    //filtra os produtos por categoria
    if (filters.categories.length > 0) {
      updatedProducts = updatedProducts.filter((product) =>
        filters.categories.includes(product.category)
      );
    }
  
    //aplica a ordenação
    if (filters.sort.length > 0) {
      if (filters.sort.includes("Popularity")) {
        updatedProducts = getPopularProducts(updatedProducts, updatedProducts.length);
      } else {
        updatedProducts = [...updatedProducts].sort((a, b) => {
          if (filters.sort.includes("High Price")) return b.price - a.price;
          if (filters.sort.includes("Low Price")) return a.price - b.price;
          if (filters.sort.includes("Newest")) return Date.parse(b.createdAt) - Date.parse(a.createdAt);
          if (filters.sort.includes("Oldest")) return Date.parse(a.createdAt) - Date.parse(b.createdAt);
          return 0;
        });
      }
    }
  
    setFilteredProducts(updatedProducts);
  };
  

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (data.length > 0) {
          setProducts(data);
          setFilteredProducts(data); //inicializa os produtos filtrados com todos os produtos
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <StyledExploreProd.Container>
      <StyledExploreProd.Header>
        <HeaderCostum
          icon={<ShoppingCart size={24} />}
          text=""
          onClick={handleCart}
        />

        <StyledExploreProd.Title>All Products</StyledExploreProd.Title>
        <StyledExploreProd.FilterButton onClick={toggleFilterModal}>
          <Sliders size={20} />
          Filter
        </StyledExploreProd.FilterButton>
      </StyledExploreProd.Header>

      <StyledExploreProd.ContainerProducts>
        <StyledExploreProd.ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} rating={true} />
          ))}
        </StyledExploreProd.ProductGrid>
      </StyledExploreProd.ContainerProducts>
      {isFilterVisible && (
        <FilterModal
          isModalOpen={isFilterVisible}
          onClose={toggleFilterModal}
          onApplyFilters={handleFiltersApply} //função para aplicar os filtros
        />
      )}
    </StyledExploreProd.Container>
  );
};

export default ExploreProducts;
