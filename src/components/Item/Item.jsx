import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import s from './item.module.css'

export default function Item({name, price, stock, category, img}) {
    function onAdd() {
        console.log('agregar al carrito')
    }
  return (
    <div className={s.cardContainer}>
        <h2>{name} </h2>
        <div className={s.imgContainer}>
            <img src={img} alt={name} />
        </div>
        <div>
            <p>${price}</p>
            <p>Yoga {category}</p>
        </div>
        <p>Stock {stock}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
    </div>
  )
}
