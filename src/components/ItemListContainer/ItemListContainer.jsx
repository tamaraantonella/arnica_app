import React, {useEffect, useState} from 'react'
import ItemList from '../ItemList/ItemList'
import {products} from '../../mock/product'
import s from './itemListContainer.module.css'
import Loader from '../Loader/Loader'

export default function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([])

    useEffect(() => {
        const getProducts = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(products)
            }, 3000)
        });
        getProducts.then(data=>{
                setItems(data)   
            })
        .catch(err=>{console.log(err)})
    }, [])

    if(items.length){
        return (
            <div className={s.containerItemList}>
                
                <div className={s.welcome}>{greeting} to Arnica Shop!</div>
                <ItemList products={items} />
            </div>

        )
        }else{
            return(
                <Loader/>
            )
        }
}
