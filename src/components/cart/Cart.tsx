import React, { useContext, useEffect, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';
import { CommonBtn } from '../common-button';
import { Form } from '../form';
import { CartContextType } from '@schemas/cart-context';

export const Cart = () => {
  const { cart, emptyCart, removeItem, getTotalPrice } = useContext(CartContext) as CartContextType;
  const totalPrice = getTotalPrice();
  const [final, setFinal] = useState(false);

  useEffect(() => {
    setFinal(false);
  }, []);

  if (final) {
    return <Form total={totalPrice} cart={cart} emptyCart={emptyCart} />;
  } else {
    return (
      <div className="w-full h-full bg-white flex flex-col justify-center items-center min-h-[18.75rem]">
        <h1 className="text-4xl font-bold text-black mb-4">Cart</h1>
        {cart.length > 0 ? (
          <div className="w-2/4 flex flex-col justify-center items-center">
            {cart.map((item) => (
              <div key={item.id} className="w-100 flex justify-start items-center mb-4 relative gap-3">
                <p>{item.quantity}</p>
                <p>{item.name}</p>
                <p>${item.price} c/u</p>
                <button onClick={() => removeItem(item.id)}>
                  <FaRegTrashAlt />
                </button>
              </div>
            ))}
            <div className="flex justify-center gap-4 w-full items-center">
              <p className="font-bold">Total</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex justify-center gap-4 w-full items-center">
              <CommonBtn onClick={emptyCart} text="Empty cart" contrast={false} />
              <CommonBtn onClick={() => setFinal(true)} text="Purchase all" contrast={true} />
            </div>
          </div>
        ) : (
          <div className="w-2/4 flex flex-col justify-center items-center">
            <p className="text-xl text-black mb-4">There are no items </p>
            <CommonBtn path="/" text="Go Home" />
          </div>
        )}
      </div>
    );
  }
};
