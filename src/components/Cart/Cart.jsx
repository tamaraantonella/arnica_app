import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import s from "./Cart.module.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, vaciarCarrito, removeItem, totalPrice } =
    useContext(CartContext);
  const total = totalPrice();

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
          <p>${total}</p>
          <button onClick={vaciarCarrito} className={s.vaciar}>
            Empty cart
          </button>
        </div>
      ) : (
        <div className={s.cartContainer}>
          <Link to="/" className={s.goBack}>
            Go back
          </Link>
          <p className={s.noCart}>There are no items </p>
        </div>
      )}
    </div>
  );
}
