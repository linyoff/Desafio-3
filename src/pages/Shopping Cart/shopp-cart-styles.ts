import styled from "styled-components";

const Container = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const TrashButton = styled.button`
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
`;

const Title = styled.h1`
  font-size: 20px;
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const ItemImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  margin-right: 16px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  font-size: 16px;
  margin: 0;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  margin: 4px 0;
  color: #555;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  border: 0.2px solid var(--);
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`;

const Quantity = styled.span`
  margin: 0 8px;
  font-size: 14px;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 18px;
`;

const Footer = styled.div`
  margin-top: auto;
  padding-top: 16px;
`;

const TotalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalItems = styled.span`
  font-size: 14px;
  color: #555;
`;

const TotalPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

export const StyleShoppCart = {
    Container,
    TrashButton,
    Title,
    CartItemContainer,
    ItemImage,
    ItemDetails,
    ItemName,
    ItemPrice,
    QuantityContainer,
    QuantityButton,
    Quantity,
    RemoveButton,
    Footer,
    TotalInfo,
    TotalItems,
    TotalPrice
}