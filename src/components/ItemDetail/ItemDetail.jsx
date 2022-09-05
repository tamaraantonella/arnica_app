import React,{useState} from 'react'

import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import s from './itemDetail.module.css'

export default function ItemDetail({item}) {
  const [cantidad, setCantidad] =useState(0)
  function onAdd(count) {
    setCantidad(count)
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
            {cantidad>1 ? <Link to="/cart">Finalizar compra</Link> : <ItemCount stock={item.stock} initial={item.stock !== 0 && 1} onAdd={onAdd} />}
        </div>
    </div>
  )
}

