import React from 'react';
import styled from 'styled-components';
import { Trash2, ShoppingCart } from 'react-feather';
import ButtonField from '../components/ButtonField';

const ProductDetail: React.FC = () => {
    return (
        <Container>
            <Header>
                <BackButton>←</BackButton>
                <CartIcon>🛒</CartIcon>
            </Header>
            <Content>
                <Price>USD {}</Price>
                <Title>{}</Title>
                <Tabs>
                    <Tab active>Overview</Tab>
                    <Tab>Features</Tab>
                </Tabs>
                <ProductImage src="" alt="" />
                <Details>{}</Details>
                {/*<Reviews>
                    <h3>Reviews ({product.reviews.length})</h3>
                    {product.reviews.map((review) => (
                        <Review key={review.userId}>
                            <ReviewerImage
                                src={userImg}
                                alt={review.userName}
                            />
                            <ReviewContent>
                                <ReviewerName>{review.userName}</ReviewerName>
                                <Stars>
                                    {'★'.repeat(review.rating)}
                                    {'☆'.repeat(5 - review.rating)}
                                </Stars>
                                <ReviewText>{review.comment}</ReviewText>
                                <PostedAt>{new Date(review.postedAt).toLocaleDateString()}</PostedAt>
                            </ReviewContent>
                        </Review>
                    ))}
                </Reviews>*/}
            </Content>
            <ButtonField typeButton="button" text="Add To Cart"></ButtonField>        
        </Container>
    );
};

export default ProductDetail;

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 16px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const BackButton = styled.button`
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;
`;

const CartIcon = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const Content = styled.div``;

const Price = styled.p`
  color: green;
  font-weight: bold;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Tabs = styled.div`
  display: flex;
  margin: 16px 0;
`;

const Tab = styled.button<{ active?: boolean }>`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 16px;
  color: ${(props) => (props.active ? 'black' : 'gray')};
  margin-right: 16px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Details = styled.p`
  margin: 16px 0;
  color: gray;
`;

const Reviews = styled.div`
  margin: 24px 0;
`;

const Review = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const ReviewerImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 12px;
`;

const ReviewContent = styled.div``;

const ReviewerName = styled.p`
  font-weight: bold;
`;

const Stars = styled.div`
  color: gold;
  margin: 4px 0;
`;

const ReviewText = styled.p`
  color: gray;
`;

const PostedAt = styled.p`
  font-size: 12px;
  color: lightgray;
`;
