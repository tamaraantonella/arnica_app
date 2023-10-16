import { Cart } from 'src/types/cart';
import { CartItem } from 'src/types/cart-item';
import { createContext, useState } from 'react';
import React from 'react';
import { CartContextType } from '@schemas/cart-context';



export const CartContext = createContext<CartContextType | null>(null);

interface CartProviderProps {
  children?: React.ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Cart>([]);

  const addItem = (item: CartItem, count: number) => {
    if (isItemInCart(item.id)) {
      updateTotalQuantitySingleProduct(item, count);
    } else {
      setCart([...cart, { id: item.id, name: item.name, price: item.price, quantity: count }]);
    }
  };

  const isItemInCart = (id: string) => {
    if (cart.length > 0 && cart.find((item) => item.id === id)) {
      return true;
    }
    return false;
  };

  const updateTotalQuantitySingleProduct = (item: CartItem, count: number) => {
    const updatedCart = cart.map((itemFromCart) => {
      if (isMatchingId(itemFromCart, item.id)) {
        return { ...itemFromCart, quantity: count };
      } else {
        return itemFromCart;
      }
    });
    setCart(updatedCart);
  };

  const removeItem = (id: string) => {
    if (isItemInCart(id)) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  const emptyCart = () => {
    setCart([]);
  };

  const getProductQuantity = (id: string) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return 0;
    return item.quantity;
  };

  const getTotalPrice = () => {
    let acc = 0;
    cart?.forEach((item) => {
      acc += item.price * (item.quantity ?? 0);
    });
    return acc;
  };

  const getTotalProducts = () => {
    let acc = 0;
    cart?.forEach((item) => {
      acc += item.quantity ?? 0;
    });
    return acc;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        isItemInCart,
        removeItem,
        emptyCart,
        getProductQuantity,
        getTotalPrice,
        getTotalProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
