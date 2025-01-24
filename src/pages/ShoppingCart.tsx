import React, { useState } from "react";
import { StyleShoppCart } from "../styles/pages/shopp-cart-styles";
import ButtonField from "../components/ButtonField";

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

  return (
    <StyleShoppCart.Container>
      <StyleShoppCart.Header>
        <StyleShoppCart.BackButton>{"<"}</StyleShoppCart.BackButton>
        <StyleShoppCart.Title>Shopping Cart</StyleShoppCart.Title>
        <StyleShoppCart.TrashButton>{"🗑"}</StyleShoppCart.TrashButton>
      </StyleShoppCart.Header>

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
          <StyleShoppCart.RemoveButton onClick={() => removeItem(item.id)}>{"🗑"}</StyleShoppCart.RemoveButton>
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


