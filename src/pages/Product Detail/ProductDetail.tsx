import React, { useEffect, useState } from 'react';
import { Product, fetchProducts, getProductById } from '../../utils/productService';
import { StyledProdDetail } from './prod-detail-styles';
import { useNavigate, useParams } from 'react-router-dom';
import { ShoppingCart } from 'react-feather';
import userImg from '../../images/user-img.png';
import ButtonField from '../../components/Button Field/ButtonField';
import HeaderCostum from '../../components/Header Costum/HeaderCostum';
import Carousel from '../../components/Carousel/Carousel';
import { useCart } from '../../context/CartContext'; // Importando o contexto do carrinho

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // id da URL
  const [product, setProduct] = useState<Product | null>(null); // armazena os dados do produto
  const [loading, setLoading] = useState(true); // mostrar carregamento
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<'overview' | 'features'>('overview'); // Estado para a aba ativa

  const { addToCart } = useCart(); // função addToCart do contexto

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        const data = await getProductById(id); // buscando produto pelo id
        setProduct(data);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        if (data.length > 0) {
          setProducts(data); // armazenando os dados obtidos
        }
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  const navigate = useNavigate();
  const handleCart = () => navigate("/shopping-cart");
  const handleSeeAll = () => navigate('/explore-products');

  if (loading) {
    return <p>Carregando produto...</p>;
  }

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  const handleAddToCart = () => {
    if (product) {
      // add o produto ao carrinho com quantidade inicial de 1
      addToCart({ produto: product, quantity: 1 });
    }
  };

  const handleTabClick = (tab: 'overview' | 'features') => {
    setActiveTab(tab);
  };

  return (
    <StyledProdDetail.Container>

        <div style={{ padding: '0 24px' }}>
          <HeaderCostum
            icon={<ShoppingCart size={24} />}
            text=""
            onClick={handleCart}
          />
          <StyledProdDetail.Price>USD {product.price}</StyledProdDetail.Price>
          <StyledProdDetail.Title>{product.name}</StyledProdDetail.Title>
          <StyledProdDetail.Tabs>
            <StyledProdDetail.Tab active={activeTab === 'overview'} onClick={() => handleTabClick('overview')}>Overview</StyledProdDetail.Tab>
            <StyledProdDetail.Tab active={activeTab === 'features'} onClick={() => handleTabClick('features')}>Features</StyledProdDetail.Tab>
          </StyledProdDetail.Tabs>
        </div>

        {activeTab === 'overview' ? (
          <StyledProdDetail.Overview>

            <div style={{ padding: '0 24px' }}>
              <StyledProdDetail.ProductImage src={product.img} alt={product.name} />
              <StyledProdDetail.Reviews>
                <h3>Reviews ({product.reviews.length})</h3>
                {product.reviews.map((review) => (
                  <StyledProdDetail.Review key={review.userId}>
                    <StyledProdDetail.ReviewerImage src={userImg} alt={review.userName} />
                    <StyledProdDetail.ReviewContent>
                      <StyledProdDetail.ReviewerName>{review.userName}</StyledProdDetail.ReviewerName>
                      <StyledProdDetail.Stars>
                        {'★'.repeat(review.rating)}
                        {'☆'.repeat(5 - review.rating)}
                      </StyledProdDetail.Stars>
                      <StyledProdDetail.ReviewText>{review.comment}</StyledProdDetail.ReviewText>
                      <StyledProdDetail.PostedAt>{new Date(review.postedAt).toLocaleDateString()}</StyledProdDetail.PostedAt>
                    </StyledProdDetail.ReviewContent>
                  </StyledProdDetail.Review>
                ))}

              </StyledProdDetail.Reviews>
            </div>

            <StyledProdDetail.FeaturedProducts>
              <StyledProdDetail.SectionHeader>
                <h3>Another Product</h3>
                <button onClick={handleSeeAll}>See All</button>
              </StyledProdDetail.SectionHeader>
              <Carousel products={products} />
            </StyledProdDetail.FeaturedProducts>
          </StyledProdDetail.Overview>
        ) : (
          <StyledProdDetail.Features>
            <StyledProdDetail.Details>{product.details}</StyledProdDetail.Details>
          </StyledProdDetail.Features>
        )}
    
      <div style={{ padding: '0 24px 24px', marginTop: 'auto' }}>
        <ButtonField typeButton="button" text="Add To Cart" onClick={handleAddToCart} />
      </div>
    </StyledProdDetail.Container>
  );
};

export default ProductDetail;
