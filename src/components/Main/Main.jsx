import { Route, Routes } from "react-router-dom";

import Cart from "../Cart/Cart";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import React from "react";
import s from "./main.module.css";
import Form from "../Form/Form";
import Banner from "../Banner/Banner";

export default function Main() {
  return (
    <div className={s.mainContainer}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ItemListContainer greeting="Welcome " />
            </>
          }
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Form />} />
      </Routes>
    </div>
  );
}
