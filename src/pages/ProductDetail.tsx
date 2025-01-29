import React, { useEffect, useState } from 'react';
import { fetchProducts, Product, getProductById } from '../utils/productService';
import { StyledProdDetail } from '../styles/pages/prod-detail-styles';
import { useNavigate, useParams } from 'react-router-dom';
import { ShoppingCart, Star } from 'react-feather';
import userImg from '../images/user-img.png';
import ButtonField from '../components/ButtonField';
import HeaderCostum from '../components/HeaderCostum';
import Carousel from '../components/Carousel';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); //id da URL
  const [product, setProduct] = useState<Product | null>(null); //armazena os dados do produto
  const [loading, setLoading] = useState(true); //mostrar carregamento
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        setLoading(true);
        const data = await getProductById(id); //buscando produto pelo id
        setProduct(data);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

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

  const navigate = useNavigate();
  const handleCart = () => navigate("/shopping-cart");
  const handleSeeAll = () => navigate('/explore-products');

  if (loading) {
    return <p>Carregando produto...</p>;
  }

  if (!product) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <StyledProdDetail.Container>

      <StyledProdDetail.Content>

        <HeaderCostum
          icon={<ShoppingCart size={24} />}
          text=""
          onClick={handleCart}
        />
        <StyledProdDetail.Price>USD {product.price}</StyledProdDetail.Price>
        <StyledProdDetail.Title>{product.name}</StyledProdDetail.Title>
        <StyledProdDetail.Tabs>
          <StyledProdDetail.Tab active>Overview</StyledProdDetail.Tab>
          <StyledProdDetail.Tab>Features</StyledProdDetail.Tab>
        </StyledProdDetail.Tabs>
        <StyledProdDetail.ProductImage src={product.img} alt={product.name} />
        <StyledProdDetail.Details>{product.details}</StyledProdDetail.Details>

        {/* Descomente quando precisar mostrar as reviews */}
        <StyledProdDetail.Reviews>
          <h3>Reviews ({product.reviews.length})</h3>
          {product.reviews.map((review) => (
            <StyledProdDetail.Review key={review.userId}>
              <StyledProdDetail.ReviewerImage src={userImg} alt={review.userName} />

              <StyledProdDetail.ReviewContent>
                <StyledProdDetail.ReviewerName>{review.userName}</StyledProdDetail.ReviewerName>
                <StyledProdDetail.Stars>
                  {'★'.repeat(review.rating)}
                </StyledProdDetail.Stars>
                <StyledProdDetail.ReviewText>{review.comment}</StyledProdDetail.ReviewText>
                <StyledProdDetail.PostedAt>{new Date(review.postedAt).toLocaleDateString()}</StyledProdDetail.PostedAt>
              </StyledProdDetail.ReviewContent>

            </StyledProdDetail.Review>
          ))}
        </StyledProdDetail.Reviews>
      </StyledProdDetail.Content>

      <StyledProdDetail.FeaturedProducts>
        <StyledProdDetail.SectionHeader>
          <h3>Featured Products</h3>
          <button onClick={handleSeeAll}>See All</button>
        </StyledProdDetail.SectionHeader>
        <Carousel
          products={products}
        />
      </StyledProdDetail.FeaturedProducts>

      <div style={{ padding: "0 24px 24px" }}>
        <ButtonField typeButton="button" text="Add To Cart"></ButtonField>
      </div>


    </StyledProdDetail.Container>
  );
};

export default ProductDetail;

