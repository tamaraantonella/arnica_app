import React from "react";
import img from "../../assets/giphy.gif";
import s from "./loader.module.css";

export default function Loader() {
  return (
    <div className={s.loaderContainer}>
      <div className={s.imgCont}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
