import React, { useState } from "react";
import { StyleShoppCart } from "./shopp-cart-styles";
import HeaderCostum from "../../components/Header Costum/HeaderCostum";
import { Trash2 } from "react-feather";
import ButtonField from "../../components/Button Field/ButtonField";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "TMA-2 Comfort Wireless",
      price: 270,
      quantity: 1,
      img: "https://via.placeholder.com/64", // Substitua pelo link da imagem real
    },
    {
      id: "2",
      name: "CO2 – Cable",
      price: 25,
      quantity: 1,
      img: "https://via.placeholder.com/64", // Substitua pelo link da imagem real
    },
  ]);

  const incrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    setCartItems([]); //redefine o carrinho para vazio
  };

  return (
    <StyleShoppCart.Container>
      
      <HeaderCostum
        icon={
          <Trash2 size={24}/>
        }
        text="Shopping Cart" 
        onClick={clearCart}
      />

      {cartItems.map((item) => (
        <StyleShoppCart.CartItemContainer key={item.id}>
          <StyleShoppCart.ItemImage src={item.img} alt={item.name} />
          <StyleShoppCart.ItemDetails>
            <StyleShoppCart.ItemName>{item.name}</StyleShoppCart.ItemName>
            <StyleShoppCart.ItemPrice>USD {item.price}</StyleShoppCart.ItemPrice>
            <StyleShoppCart.QuantityContainer>
              <StyleShoppCart.QuantityButton onClick={() => decrementQuantity(item.id)}>
                {"−"}
              </StyleShoppCart.QuantityButton>
              <StyleShoppCart.Quantity>{item.quantity}</StyleShoppCart.Quantity>
              <StyleShoppCart.QuantityButton onClick={() => incrementQuantity(item.id)}>
                {"+"}
              </StyleShoppCart.QuantityButton>
            </StyleShoppCart.QuantityContainer>
          </StyleShoppCart.ItemDetails>
          <StyleShoppCart.RemoveButton onClick={() => removeItem(item.id)}>{<Trash2 color="var(--colorsGreyDark_1)" size={20}/>}</StyleShoppCart.RemoveButton>
        </StyleShoppCart.CartItemContainer>
      ))}

      <StyleShoppCart.Footer>
        <StyleShoppCart.TotalInfo>
          <StyleShoppCart.TotalItems>Total {cartItems.length} Items</StyleShoppCart.TotalItems>
          <StyleShoppCart.TotalPrice>USD {totalPrice}</StyleShoppCart.TotalPrice>
        </StyleShoppCart.TotalInfo>
        <ButtonField typeButton="submit" text="Proceed to Checkout"/>
      </StyleShoppCart.Footer>
    </StyleShoppCart.Container>
  );
};

export default ShoppingCart;


