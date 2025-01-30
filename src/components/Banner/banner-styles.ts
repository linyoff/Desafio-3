import styled from "styled-components";

const StyledBanner = styled.div`
  position: relative;
  width: 350px;
  height: 180px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 20px;
  padding: 20px 24px;
  background-color: var(--colorsWhite);
  border-radius: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
`;

const ShopNow = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;                
  left: 50;
  margin-bottom: 30px;
  color: var(--colorsGreen);
  gap: 12px;

  button {
    font-weight: bold;
    background: none;
    border: none;
    color: var(--colorsGreen);
    text-decoration: none;
  }
`;

const ProductTitle = styled.h3`
  font-size: 22px;
  font-weight: 950;
  margin: 0;
`;

const ProductImage = styled.img`
  width: 130px;
  height: auto;
  border-radius: 10px;
`;

export const BannerStyles = {
  StyledBanner,
  ContentWrapper,
  ShopNow,
  ProductTitle,
  ProductImage,
};
