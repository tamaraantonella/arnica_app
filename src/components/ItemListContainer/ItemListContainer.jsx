import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemListContainer({ greeting }) {
    function onAdd() {
        console.log('agregar al carrito')
    }
    return (
        <div>
            {greeting} to Arnica Shop!
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
    )
}
