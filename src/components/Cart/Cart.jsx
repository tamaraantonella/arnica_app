import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import s from "./Cart.module.css";

export default function Cart() {
  const { cart, vaciarCarrito, removeItem } = useContext(CartContext);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Cart</h1>
      {cart.length > 0 ? (
        <div className={s.cartContainer}>
          {cart.map((item) => (
            <div key={item.id} className={s.cartItem}>
              <p>{item.cantidad}</p>
              <p>{item.name}</p>
              <p>${item.price * item.cantidad}</p>
              <button onClick={() => removeItem(item.id)}>
                <FaRegTrashAlt />
              </button>
            </div>
          ))}
          <p className={s.total}>Total</p>
          <p>
            ${cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)}
          </p>
          <button onClick={vaciarCarrito} className={s.vaciar}>
            Empty cart
          </button>
        </div>
      ) : (
        <p className={s.noCart}>There are no items </p>
      )}
    </div>
  );
}
