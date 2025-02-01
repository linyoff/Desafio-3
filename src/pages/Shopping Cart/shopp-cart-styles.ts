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
  margin: 16px;
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
  margin: 0 0 5px 0;
  font-weight: 400;
`;

const ItemPrice = styled.p`
  font-size: 14px;
  margin: 0 0 16px 0;
  font-weight: bold;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  border: 1px solid var(--colorsGreyDark_1);
  width: 30px;
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Quantity = styled.span`
  margin: 0 16px;
  font-size: 16px;
`;

const RemoveButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  margin-left: auto;
  display: flex;
  align-items: center;
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

const EmptyMessage =  styled.p`
    text-align: center;
    font-size: 18px;
    color: var(--colorsGreyDark_2);
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
    TotalPrice,
    EmptyMessage
}