import { useContext} from "react";

import { CartContext } from "../../context/CartContext";
import { GiShoppingBag } from "react-icons/gi";
import React from "react";
import style from "./CartWidget.module.css";

export default function CartWidget() {
  const { totalProducts } = useContext(CartContext);

  const cartLength = totalProducts();
  if (cartLength === 0) {
    return <div className={style.cartWidget}></div>;
  } else {
    return (
      <div>
        <GiShoppingBag className={style.chart} />
        {cartLength}
      </div>
    );
  }
}
