import React, {useState} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import {products} from '../../mock/product'
import s from './itemDetailContainer.module.css'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom'

export default function ItemDetailContainer() {
    const {id}= useParams()
    const idParsed = Number(id)
    const [item, setItem] = useState({})
    const [items,setItems]= useState([])
    useEffect(() => {
        const getProducts = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(products)
            }, 500)
        });
        getProducts.then(data=>setItems(data))
        .catch(err=>{console.log(err)})
        const itemFound = items.find(item => item.id === idParsed)
        setItem(itemFound)
    }, [idParsed, items])
    
    return(
        <div className={s.itemDetailContainer}>
            {item ? <ItemDetail item={item}/> : <Loader/>}
        </div>
    )
}
