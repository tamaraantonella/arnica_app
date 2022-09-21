import React, { useState } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import s from "./itemDetailContainer.module.css";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
export default function ItemDetailContainer() {
  const { id } = useParams();
  const idParsed = id;
  //eslint-disable-next-line
  const [item, setItem] = useState({});

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    const ref = doc(itemCollection, idParsed);
    getDoc(ref)
      .then((res) => {
        setItem({ id: res.id, ...res.data() });
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
    return () => {
      setItem({});
    };
  }, [idParsed]);

  return (
    <div className={s.itemDetailContainer}>
      {item.id ? <ItemDetail item={item} /> : <Loader />}
    </div>
  );
}
