import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item, count) => {
    if (isItemInCart(item.id)) {
      totalQuantitySingleProduct(item, count);
    } else {
      setCart([
        ...cart,
        { id: item.id, name: item.name, price: item.price, cantidad: count },
      ]);
    }
  };
  const isItemInCart = (id) => {
    if (cart.length > 0 && cart.find((item) => item.id === id)) return true;
    return false;
    //some retorna true si al menos uno de los elementos cumple la condición
  };
  function totalQuantitySingleProduct(item, count) {
    const update = cart.map((prod) => {
      if (prod.id === item.id) {
        const productUpdated = { ...prod, cantidad: count };
        return productUpdated;
      } else {
        return prod;
      }
    });
    return setCart(update);
  }
  const removeItem = (id) => {
    if (isItemInCart(id)) {
      //remove item one by one
      setCart(cart.filter((item) => item.id !== id));
    }
  };
  const vaciarCarrito = () => {
    setCart([]);
  };
  const getProductQuantity = (id) => {
    const cantidadItems = cart.find((item) => item.id === id);
    return cantidadItems?.cantidad;
  };
  const totalPrice = () => {
    let acumulador = 0;
    cart?.forEach((item) => {
      acumulador += item.price * item.cantidad;
    });
    return acumulador;
  };
  const totalProducts = () => {
    let acumulador = 0;
    cart?.forEach((item) => {
      acumulador += item.cantidad;
    });
    return acumulador;
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isItemInCart,
        removeItem,
        vaciarCarrito,
        getProductQuantity,
        totalPrice,
        totalProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
