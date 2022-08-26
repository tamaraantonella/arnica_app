import React from 'react'
import Item from '../Item/Item'
import s from './itemList.module.css'

export default function ItemList({products}) {
  return (
    <div className={s.itemsContainer}>
        {products ? 
        products.map(product => 
            <Item 
                key={product.id} 
                name={product.name} 
                price={product.price}
                category={product.category}
                stock={product.stock}
                img={product.img}
                />) 
        : <p>No products found</p>}
    </div>
  )
}
