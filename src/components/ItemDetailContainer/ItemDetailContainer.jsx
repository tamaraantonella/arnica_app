import React, { useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { products } from "../../mock/product";
import s from "./itemDetailContainer.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
export default function ItemDetailContainer() {
  const { id } = useParams();
  const idParsed = id;
  //eslint-disable-next-line
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  useEffect(() => {
    const itemCollection = collection(db, "productos");
    getDocs(itemCollection)
      .then((querySnapshot) => {
        const productos = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(productos);
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });

    const itemFound = items.find((prod) => prod.id === idParsed);
    setItem(itemFound);
  }, [idParsed, items]);

  return (
    <div className={s.itemDetailContainer}>
      {item ? <ItemDetail item={item} /> : <Loader />}
    </div>
  );
}
