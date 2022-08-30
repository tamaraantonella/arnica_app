import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import React from 'react'
import s from './main.module.css';

export default function Main() {
    return (
        <div className={s.mainContainer} >
            <ItemListContainer greeting='Welcome'/>
            <ItemDetailContainer/>
        </div>
    )
}
