import React from 'react';
import s from './NavBar.module.css'
import logo from '../../assets/logosinbc.png'
import {GiShoppingBag} from 'react-icons/gi'

const NavBar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.navCont}>
        <div className={s.imgCont}><a className={s.linkLogo} href="index.html"><img className={s.img} src={logo} alt="logo" /></a>
        </div>
        <p className={s.navName}>Árnica Yoga</p>
      </div>
      <ul className={s.list}>
        <li><a className={s.link} href="#top">YogaMats</a> </li>
        <li><a className={s.link} href="#top">Accesories</a> </li>
        <li><a className={s.link} href="#top">All</a></li>
      </ul>
      <GiShoppingBag className={s.chart} />
    </nav>
  )
}

export default NavBar