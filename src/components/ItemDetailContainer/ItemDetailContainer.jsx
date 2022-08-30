import React, {useState} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import {products} from '../../mock/product'
import s from './itemDetailContainer.module.css'
import { useEffect } from 'react'

export default function ItemDetailContainer() {
    
    const [item, setItem] = useState({})
    const [items,setItems]= useState([])
    useEffect(() => {
        const getProducts = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(products)
            }, 3000)
        });
        getProducts.then(data=>setItems(data))
        .catch(err=>{console.log(err)})
        const itemFound = items.find(item => item.id === 1)
        setItem(itemFound)
    }, [items])
    
    return(
        <div className={s.itemDetailContainer}>
            {item ? <ItemDetail item={item}/> : <Loader/>}
        </div>
    )
}
