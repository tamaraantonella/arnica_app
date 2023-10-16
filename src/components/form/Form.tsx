import { CartContext } from '@context/CartContext';
import { db } from 'src/firebaseConfig';
import { FieldValue, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React, { ChangeEvent, useState } from 'react';
import { CommonBtn } from '../common-button';

interface FormProps {
  cart?: CartContext['cart'];
  total?: number;
  emptyCart?: CartContext['emptyCart'];
}

interface Buyer {
  name: string;
  lastName: string;
  phone: string;
  email: string;
}

type BuyerKeys = keyof Buyer;
const buyerKeys: BuyerKeys[] = ['name', 'lastName', 'phone', 'email'];

interface Order {
  items: CartContext['cart'];
  total: number;
  date: FieldValue;
  buyer: Buyer;
}

export const Form = ({ cart, total, emptyCart }: FormProps) => {
  const [orderId, setOrderId] = useState<string>();

  const sendOrder = () => {
    const order: Order = {
      buyer: {
        ...buyer
      },
      items: cart,
      total: total,
      date: serverTimestamp()
    };

    const orders = collection(db, 'orders');
    addDoc(orders, order).then(({ id }) => setOrderId(id));
  };

  const [buyer, setBuyer] = useState<Buyer>({
    name: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleSubmit = () => {
    sendOrder();
    emptyCart();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

  if (orderId) {
    return (
      <div className="min-h-70vh flex flex-col items-center justify-center bg-gray-100 gap-4">
        <h1>Order completed</h1>
        <p>Your order number is: {orderId}</p>
        <CommonBtn path="/" text="Go back" />
      </div>
    );
  } else {
    return (
      <div className="min-h-70vh flex flex-col items-center justify-center bg-gray-100 gap-4">
        <div className="text-lg font-semibold mb-4 text-center text-contrast-color">
          <h1>Complete your order </h1>
        </div>
        <form className="flex flex-col items-start justify-center w-40 mx-auto">
          {buyerKeys.map((key) => {
            return (
              <>
                <label className="text-main-color-dark text-sm font-semibold mt-2" htmlFor={key}>
                  {key.toUpperCase()}
                </label>
                <input
                  className="w-full h-8 border bg-gray-100 p-2"
                  type={key === 'phone' ? 'number' : 'text'}
                  name={key}
                  value={buyer.name}
                  onChange={handleChange}
                />
              </>
            );
          })}
          <CommonBtn onClick={handleSubmit} text="Send Form" />
        </form>
      </div>
    );
  }
};
