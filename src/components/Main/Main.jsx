import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import s from './main.module.css';

export default function Main() {
    return (
        <div className={s.mainContainer} >
            <ItemListContainer greeting='Welcome'/>
        </div>
    )
}
