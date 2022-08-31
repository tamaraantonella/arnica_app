import { Route, Routes } from 'react-router-dom';

import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import React from 'react'
import s from './main.module.css';

export default function Main() {
    return (
        <div className={s.mainContainer} >  
            <Routes>
                <Route path="/" element={<ItemListContainer greeting='Welcome '/>}/> 
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:category" element={<ItemListContainer />} />                
            </Routes>
        </div>
        
    )
}
