import React from "react";
import { Link } from "react-router-dom";
import s from "./btn.module.css";

export default function CommonBtn({ path, text, contrast,onClick }) {
  console.log("🚀 ~ file: CommonBtn.jsx ~ line 6 ~ CommonBtn ~ path", path);
  if (path) {
    return (
      <Link to={`${path}`} className={contrast ? s.contrast : s.finalizar}>
        {text}
      </Link>
    );
  }
  if(onClick){
    return (
      <button className={contrast ? s.contrast : s.finalizar} onClick={onClick}>
        {text}
      </button>
    );

  }
}
