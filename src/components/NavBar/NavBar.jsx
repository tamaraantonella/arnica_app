import { Link, NavLink } from "react-router-dom";

import { AiOutlineInstagram } from "react-icons/ai";
import CartWidget from "../CartWidget/CartWidget";
import React from "react";
import logo from "../../assets/logosinbc.png";
import s from "./NavBar.module.css";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const NavBar = ({ isFooter }) => {
  //eslint-disable-next-line
  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    const collectionCat = collection(db, "categorias");
    getDocs(collectionCat).then((querySnapshot) => {
      const categorias = querySnapshot?.docs.map((cat) => {
        return {
          id: cat.id,
          ...cat.data(),
        };
      });
      setCategories(categorias);
    });
  }, []);
  if (isFooter) {
    return (
      <nav className={s.navFooter}>
        <div className={s.navCont}>
          <Link to="/" className={s.link}>
            <p className={s.navName}>Árnica Yoga</p>
          </Link>
        </div>
        <ul className={s.navList}>
          <Link to="/" className={s.link}>
            {" "}
            <li>Home</li>
          </Link>
          {categories?.map((cat) => {
            return (
              <li key={cat.id} className={s.link}>
                <NavLink
                  to={`/category/${cat.route}`}
                  className={s.link}
                  activeClassName={s.active}
                >
                  {cat.name}
                </NavLink>
              </li>
            );
          })}
          <AiOutlineInstagram className={s.link} />
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className={s.nav}>
        <div className={s.navCont}>
          <div className={s.imgCont}>
            <img className={s.img} src={logo} alt="logo" />
          </div>
          <Link to="/" className={s.link}>
            <p className={s.navName}>Árnica Yoga</p>
          </Link>
        </div>
        <ul className={s.navList}>
          <NavLink to="/" className={s.link}>
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/category/mats" className={s.link}>
            {" "}
            <li>YogaMats</li>
          </NavLink>
          <NavLink to="/category/acc" className={s.link}>
            {" "}
            <li>Accesories</li>
          </NavLink>
        </ul>
        <Link to="/cart" className={s.link}>
          <CartWidget />
        </Link>
      </nav>
    );
  }
};

export default NavBar;
