import { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { GiShoppingBag } from "react-icons/gi";
import React from "react";
import style from "./CartWidget.module.css";

export default function CartWidget() {
  const { totalProducts } = useContext(CartContext);

  const cartLength = totalProducts();

  return (
    <div>
      <GiShoppingBag className={style.chart} />
      {cartLength === 0 ? "" : { cartLength }}
    </div>
  );
}
