import { Link } from "react-router-dom";
import React from "react";
import s from "./item.module.css";

export default function Item({ name, price, stock, category, img, id }) {
  return (
    <Link to={`/item/${id}`} className={s.cardContainer}>
      <h2>{name} </h2>
      <div className={s.imgContainer}>
        <img src={img} alt={name} />
      </div>
      <div className={s.items}>
        <p className={s.price}>${price}</p>
        <p>Yoga {category === "acc" ? 'Accesories' : 'Mat' }</p>
      <p>Stock {stock}</p>
      </div>
    </Link>
  );
}
