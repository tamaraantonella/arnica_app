import React, { useState } from 'react'
import s from './itemCount.module.css'

export default function ItemCount({ stock, initial, onAdd}) {
    const [count, setCount] = useState(initial)

    function add() {
        if (count>=0 && count < stock) {
            setCount(count + 1)
        }
    }
    function remove() {
        count > 1 && setCount(count - 1)
    }
    return (
        <div className={s.countContainer} >
            <div className={s.buttonContainer}>
                <button onClick={()=>remove()} className={s.buttonCount}>-</button>
                <p className={s.counter}>{count}</p>
                <button onClick={()=>add()} className={s.buttonCount}>+</button>
            </div>
            <button className={s.addChart} onClick={onAdd} >Add to chart</button>
        </div>
    )
}
