import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import s from "./Cart.module.css";
import { Link } from "react-router-dom";
import Form from "../Form/Form";
import { useState } from "react";
import { useEffect } from "react";
import CommonBtn from "../Buttons/CommonBtn";

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
              <CommonBtn
                onClick={vaciarCarrito}
                text="Empty cart"
                contrast={false}
              />
              <CommonBtn
                onClick={() => setFinal(true)}
                text="Purchase all"
                contrast={true}
              />
            </div>
          </div>
        ) : (
          <div className={s.cartContainer}>
            <p className={s.noCart}>There are no items </p>
            <CommonBtn path="/" text="Go Home" />
          </div>
        )}
      </div>
    );
  }
}
