import React, { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
// import { products } from "../../mock/product";
import s from "./itemListContainer.module.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export default function ItemListContainer({ greeting }) {
  //eslint-disable-next-line
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const itemCollection = collection(db, "productos");
    var q;
    category && (q = query(itemCollection, where("category", "==", category)));
    getDocs(category ? q : itemCollection)
      .then((querySnapshot) => {
        const productos = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(productos);
      })
      .catch((error) => {
        console.log("Error searching items", error);
      });
  }, [category]);

  if (items.length) {
    return (
      <div className={s.containerItemList}>
        {category &&
          (category === "acc" ? (
            <div className={s.banner}>
              <h1>Accesories</h1>
            </div>
          ) : (
            <h1 className={s.banner}>Yoga mats</h1>
          ))}
        {!category && (
          <div className={s.welcome}>
            <h1>{greeting} to Arnica Shop!</h1>
          </div>
        )}
        <ItemList products={items} />
      </div>
    );
  } else {
    return <Loader />;
  }
}
