import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProducts, Product } from "../utils/productService";
import { Sliders } from "react-feather";
import ProductCard from "../components/ProductCard";
import { StyledExploreProd } from "../styles/pages/explore-prod-styles";
import HeaderCostum from "../components/HeaderCostum";
import { ShoppingCart } from "react-feather";
import FilterModal from "../components/FilterModal";

const ExploreProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFilterVisible, setFilterVisible] = useState(false);

  const navigate = useNavigate();

  const handleCart = () => navigate("/shopping-cart");

  //irá mudar o estado para ativar ou não
  const toggleFilterModal = () => {
    setFilterVisible(!isFilterVisible);
  }

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (data.length > 0) {
          setProducts(data);
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
          icon={
            <ShoppingCart size={24} />
          }
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
          {products.map((product) => (
            <ProductCard key={product.id} product={product} rating={true} />
          ))}
        </StyledExploreProd.ProductGrid>
      </StyledExploreProd.ContainerProducts>
      {isFilterVisible && <FilterModal isModalOpen={isFilterVisible} onClose={toggleFilterModal} />}
    </StyledExploreProd.Container>
  );
};

export default ExploreProducts;
