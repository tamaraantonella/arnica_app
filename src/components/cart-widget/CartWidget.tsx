import React, { useContext } from 'react';
import { GiShoppingBag } from 'react-icons/gi';
import { CartContext } from '../../context/CartContext';
import { CartContextType } from '@schemas/cart-context';

export const CartWidget = () => {
  const { getTotalProducts } = useContext(CartContext) as CartContextType;
  const totalProducts = getTotalProducts();

  return (
    <div>
      <GiShoppingBag className="text-main-dark hover:text-main-light" />
      {totalProducts === 0 ? '' : totalProducts}
    </div>
  );
};
