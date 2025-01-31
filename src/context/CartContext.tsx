import React, { createContext, useContext, useState } from "react";
import { Product } from "../utils/productService";

//interface para o produto que será recebido no carrinho
interface CartItem {
  produto: Product;
  quantity: number;
}

//definindo o tipo de contexto
interface CartContextType {
  cartItems: CartItem[];
  totalItems: number; //total de itens no carrinho
  addToCart: (item: CartItem) => void; 
  incrementQuantity: (id: string) => void;
  decrementQuantity: (id: string) => void;
  removeItem: (id: string) => void;
  clearCart: () => void; 
}

//inicializando o cart context com valor indefinido
const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  //controlador de estado dos itens no carrinho
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  //número total de itens no carrinho
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  //adicionar item ao carrinho
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.produto.id === item.produto.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.produto.id === item.produto.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  //aumentar quantidade de itens do produto no carrinho
  const incrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.produto.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  //diminuir quantidade de itens do produto no carrinho
  const decrementQuantity = (id: string) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.produto.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  //retirar item do carrinho
  const removeItem = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.produto.id !== id));
  };

  //limpar carrinho
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalItems, addToCart, incrementQuantity, decrementQuantity, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
