import { useContext, useEffect, useState } from "react";

import { CartContext } from "../../context/CartContext";
import { GiShoppingBag } from "react-icons/gi";
import React from "react";
import style from "./CartWidget.module.css";

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setCartLength(0);
    for (let i = 0; i < cart.length; i++) {
      setCartLength(cartLength + cart[i].cantidad);
    }
    //eslint-disable-next-line
  }, [cart]);

  return (
    <div>
      <GiShoppingBag className={style.chart} />
      {cartLength}
    </div>
  );
}
