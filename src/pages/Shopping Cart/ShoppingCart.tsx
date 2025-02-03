import React from "react";
import { StyleShoppCart } from "./shopp-cart-styles";
import HeaderCostum from "../../components/Header Costum/HeaderCostum";
import { Trash2, Plus, Minus } from "react-feather";
import ButtonField from "../../components/Button Field/ButtonField";
import { useCart } from "../../context/CartContext";

const ShoppingCart: React.FC = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeItem, clearCart } = useCart(); //obtendo funções do contexto

  //funcao que calcula valor total no carrinho
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.produto.price * item.quantity,
    0
  );

  return (
    <StyleShoppCart.Container>
      
      <HeaderCostum
        icon={<Trash2 size={24} />}
        text="Shopping Cart" 
        onClick={clearCart}
      />

      {cartItems.length === 0 ? (
        <StyleShoppCart.EmptyMessage>Seu carrinho está vazio.</StyleShoppCart.EmptyMessage>
      ) : (
        cartItems.map((item) => (
          <StyleShoppCart.CartItemContainer key={item.produto.id}>

            <StyleShoppCart.ItemImage src={item.produto.img} alt={item.produto.name} />

            <StyleShoppCart.ItemDetails>
              <StyleShoppCart.ItemName>{item.produto.name}</StyleShoppCart.ItemName>
              <StyleShoppCart.ItemPrice>USD {item.produto.price}</StyleShoppCart.ItemPrice>

              <StyleShoppCart.QuantityContainer>
                <StyleShoppCart.QuantityButton onClick={() => decrementQuantity(item.produto.id)}>
                  <Minus size={20}/>
                </StyleShoppCart.QuantityButton>

                <StyleShoppCart.Quantity>{item.quantity}</StyleShoppCart.Quantity>
                <StyleShoppCart.QuantityButton onClick={() => incrementQuantity(item.produto.id)}>
                  <Plus size={20}/>
                </StyleShoppCart.QuantityButton>

                <StyleShoppCart.RemoveButton onClick={() => removeItem(item.produto.id)}>
                  <Trash2 color="var(--colorsGreyDark_1)" size={20}/>
                </StyleShoppCart.RemoveButton>

              </StyleShoppCart.QuantityContainer>

            </StyleShoppCart.ItemDetails>

          </StyleShoppCart.CartItemContainer>
        ))
      )}

      <StyleShoppCart.Footer>
        <StyleShoppCart.TotalInfo>
          <StyleShoppCart.TotalItems>Total {cartItems.length} Items</StyleShoppCart.TotalItems>
          <StyleShoppCart.TotalPrice>USD {totalPrice.toFixed(2)}</StyleShoppCart.TotalPrice>
        </StyleShoppCart.TotalInfo>
        <ButtonField typeButton="submit" text="Proceed to Checkout" />
      </StyleShoppCart.Footer>
    </StyleShoppCart.Container>
  );
};

export default ShoppingCart;
