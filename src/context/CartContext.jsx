import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);

  const addItem = (product) => {
    const isProductInState = cartState.find((item) => item.id === product.id);

    if (isProductInState) {
      setCartState(
        cartState.map((item) =>
          item.id === product.id
            ? { ...item, qtyCartItem: item.qtyCartItem + 1 }
            : item
        )
      );
    } else {
      setCartState([...cartState, { ...product, qtyCartItem: 1 }]);
    }
  };

  const removeItem = (product) => {
    const isProductInState = cartState.find((item) => item.id === product.id);
    if (isProductInState) {
      if (isProductInState.qtyCartItem === 1) {
        setCartState(cartState.filter((item) => item.id !== product.id));
      } else {
        setCartState(
            cartState.map((item) =>
              item.id === product.id
                ? { ...item, qtyCartItem: item.qtyCartItem - 1 }
                : item
            )
          );
      }
    }
  };

  const deleteItem = (productId) => {
    setCartState(cartState.filter((item) => item.id !== productId))
  }

  return (
    <CartContext.Provider value={{ cartState, addItem, removeItem, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};