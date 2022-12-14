import React, { useContext, useState } from "react";

import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import s from "./itemDetail.module.css";
import CommonBtn from "../Buttons/CommonBtn";

export default function ItemDetail({ item }) {
  const [cantidad, setCantidad] = useState(0);
  const { addItem, getProductQuantity } = useContext(CartContext);

  function onAdd(count) {
    setCantidad(count);
    addItem(item, count);
  }
  const quantity = getProductQuantity(item.id);
  return (
    <div className={s.detailCont}>
      <h2>{item.name}</h2>
      <div>
        <div className={s.picture}>
          <img src={item.img} alt={item.name} />
        </div>

        <p>${item.price}</p>
        <p>Yoga {item.category}</p>
        <p>Stock {item.stock}</p>
        <p>{item.description}</p>

        {cantidad >= 1 ? (
          <CommonBtn path="/cart" text="Purchase" />
        ) : (
          <ItemCount
            stock={item.stock}
            initial={item.stock !== 0 && quantity ? quantity : 1}
            onAdd={onAdd}
          />
        )}
      </div>
    </div>
  );
}
