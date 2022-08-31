import ItemCount from '../ItemCount/ItemCount'
import React from 'react'
import s from './itemDetail.module.css'

export default function ItemDetail({item}) {
  function onAdd() {
    console.log('agregar al carrito')
}
  return (
    <div className={s.detailCont}>
        <h2>{item.name}</h2>
        <div>
          <div className={s.picture} > 
            <img src={item.img} alt={item.name} />
          </div>
          
            <p>${item.price}</p>
            <p>Yoga {item.category}</p>
            <p>Stock {item.stock}</p>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        </div>
    </div>
  )
}

