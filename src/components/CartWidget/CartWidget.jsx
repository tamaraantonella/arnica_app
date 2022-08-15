import React from 'react'
import { GiShoppingBag } from 'react-icons/gi'
import style from './CartWidget.module.css'

export default function CartWidget() {
    return (
        <div><GiShoppingBag className={style.chart} /></div>
    )
}
