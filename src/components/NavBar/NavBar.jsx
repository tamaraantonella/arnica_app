import React from 'react';
import s from './NavBar.module.css'
import logo from '../../assets/logosinbc.png'
import CartWidget from '../CartWidget/CartWidget';
import {AiOutlineInstagram} from 'react-icons/ai'

const NavBar = ({isFooter}) => {
  if (isFooter) {
    return (
      <nav className={s.navFooter}>
        <div className={s.navCont}>
          <p className={s.navName}>Árnica Yoga</p>
        </div>
        <ul className={s.navList}>
          <li><a className={s.link} href="#top">YogaMats</a> </li>
          <li><a className={s.link} href="#top">Accesories</a> </li>
          <li><a className={s.link} href="#top">All</a></li>
          <AiOutlineInstagram className={s.link} />
        </ul>
      </nav>
    )
  }
  else {
    return (
    <nav className={s.nav}>
      <div className={s.navCont}>
        <div className={s.imgCont}><a className={s.linkLogo} href="index.html"><img className={s.img} src={logo} alt="logo" /></a>
        </div>
        <p className={s.navName}>Árnica Yoga</p>
      </div>
      <ul className={s.navList}>
        <li><a className={s.link} href="#top">YogaMats</a> </li>
        <li><a className={s.link} href="#top">Accesories</a> </li>
        <li><a className={s.link} href="#top">All</a></li>
      </ul>
      <CartWidget />
    </nav>
  )}

}

export default NavBar