import React from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function Form() {
  //eslint-disable-next-line
  const  [orderId, setOrderId]= useState()
  //eslint-disable-next-line
  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Juan",
        phone: "123456789",
        email: "hola@gmail.com",
      },
      items: [
        {
          id: "1",
          title: "Producto 1",
          price: 100,
        },
      ],
      total: 100,
    };
    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({id}) => setOrderId(id));
  };

  return <div>Form</div>;
}
