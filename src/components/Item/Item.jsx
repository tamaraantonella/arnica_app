import { Link } from "react-router-dom";
import React from "react";
import s from "./item.module.css";

export default function Item({ name, price, stock, category, img, id }) {
  return (
    <div className={s.cardContainer}>
      <h2>{name} </h2>
      <div className={s.imgContainer}>
        <img src={img} alt={name} />
      </div>
      <div>
        <p>${price}</p>
        <p>Yoga {category}</p>
      </div>
      <p>Stock {stock}</p>
      <Link to={`/item/${id}`} className={s.link}>
        See detail
      </Link>
    </div>
  );
}
