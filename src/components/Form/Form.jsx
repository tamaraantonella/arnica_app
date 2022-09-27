import React from "react";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useState } from "react";
import s from "./Form.module.css";
import { Link } from "react-router-dom";

export default function Form({ cart, total, vaciarCarrito }) {
  const [orderId, setOrderId] = useState();
  const sendOrder = () => {
    const order = {
      buyer: {
        ...input,
      },
      items: cart,
      total: total,
      date: serverTimestamp(),
    };
    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({ id }) => setOrderId(id));
  };
  const [input, setInput] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendOrder();
    vaciarCarrito();
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  if (orderId) {
    return (
      <div className={s.container}>
        <h1>Order completed!</h1>
        <p>Your order number is: {orderId}</p>
        <Link to="/" className={s.button}>
          Go back
        </Link>
      </div>
    );
  } else {
    return (
      <div className={s.container}>
        <div className={s.title}>
          <h1>Complete your order </h1>
        </div>
        <form className={s.form}>
          <label htmlFor="nombre">Name</label>
          <input
            type="text"
            name="nombre"
            value={input.name}
            onChange={handleChange}
          />
          <label htmlFor="nombre">Surname</label>
          <input
            type="text"
            name="apellido"
            value={input.apellido}
            onChange={handleChange}
          />
          <label htmlFor="nombre">Email</label>
          <input
            type="text"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <label htmlFor="nombre">Tel</label>
          <input
            type="number"
            name="telefono"
            value={input.telefono}
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className={s.button}>
            Enviar
          </button>
        </form>
      </div>
    );
  }
}
