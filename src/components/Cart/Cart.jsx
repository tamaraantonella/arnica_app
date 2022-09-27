import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import s from "./Cart.module.css";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import { useState } from "react";
import { useEffect } from "react";

export default function Cart() {
  const { cart, vaciarCarrito, removeItem, totalPrice } =
    useContext(CartContext);
  const total = totalPrice();
  const [final, setFinal] = useState(false);
  useEffect(() => {
    setFinal(false);
  }, []);
  if (final) {
    return <Form total={total} cart={cart} vaciarCarrito={vaciarCarrito} />;
  } else {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Cart</h1>
        {cart.length > 0 ? (
          <div className={s.cartContainer}>
            {cart.map((item) => (
              <div key={item.id} className={s.cartItem}>
                <p>{item.cantidad}</p>
                <p>{item.name}</p>
                <p>${item.price} c/u</p>
                <button onClick={() => removeItem(item.id)}>
                  <FaRegTrashAlt />
                </button>
              </div>
            ))}
            <div className={s.totalPrice}>
              <p className={s.total}>Total</p>
              <p>${total}</p>
            </div>
            <div className={s.totalPrice}>
              <button onClick={vaciarCarrito} className={s.vaciar}>
                Empty cart
              </button>
              <button className={s.vaciar} onClick={() => setFinal(true)}>
                Buy all
              </button>
            </div>
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
}