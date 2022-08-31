import {Link, NavLink} from 'react-router-dom'

import {AiOutlineInstagram} from 'react-icons/ai'
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import logo from '../../assets/logosinbc.png'
import s from './NavBar.module.css'

const NavBar = ({isFooter}) => {
  if (isFooter) {
    return (
      <nav className={s.navFooter}>
        <div className={s.navCont}>
        <Link to ="/" className={s.link}><p className={s.navName}>Árnica Yoga</p></Link>
        </div>
        <ul className={s.navList}>
        <Link to ="/category/mats" className={s.link}> <li >YogaMats</li></Link>
        <Link to ="/category/acc" className={s.link}> <li >Accesories</li></Link>
        <Link to ="/" className={s.link}> <li >All</li></Link>
          <AiOutlineInstagram className={s.link} />
        </ul>
      </nav>
    )
  }
  else {
    return (
    <nav className={s.nav}>
      <div className={s.navCont}>
        <div className={s.imgCont}><img className={s.img} src={logo} alt="logo" />
        </div>
        <Link to ="/" className={s.link}><p className={s.navName}>Árnica Yoga</p></Link>
      </div>
      <ul className={s.navList}>
        
        <NavLink to ="/category/mats" className={s.link}> <li >YogaMats</li></NavLink>
          <NavLink to ="/category/acc" className={s.link}> <li >Accesories</li></NavLink>
          <NavLink to ="/" className={s.link}> <li >All</li></NavLink>
      </ul>
      <CartWidget />
    </nav>
  )}

}

export default NavBar