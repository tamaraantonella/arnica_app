import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, count) => {
    setCart([
      ...cart,
      { id: item.id, name: item.name, price: item.price, cantidad: count },
    ]);
  };
  const isItemInCart = (id) => {
    return cart.some((item) => item.id === id);
    //some retorna true si al menos uno de los elementos cumple la condición
  };
  const removeItem = (id) => {
    if (isItemInCart(id)) {
      //remove item one by one
      setCart(cart.filter((item) => item.id !== id));
    }
  };
  const vaciarCarrito = () => {
    setCart(0);
  };
  const getCartTotal = () => {
    const cantidadItems = cart.map((item) => item.cantidad);
    console.log(cantidadItems);
  };
  return (
    <CartContext.Provider
      value={{ cart, addItem, isItemInCart, removeItem, vaciarCarrito }}
    >
      {children}
    </CartContext.Provider>
  );
};
