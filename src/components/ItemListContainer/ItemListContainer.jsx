import React, {useEffect, useState} from 'react'

import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import {products} from '../../mock/product'
import s from './itemListContainer.module.css'
import{useParams} from 'react-router-dom'

export default function ItemListContainer({ greeting }) {
    const [items, setItems] = useState([])

    const {category} = useParams()
    
    useEffect(() => {  
    const getProducts = new Promise((res,rej)=>{
        setTimeout(()=>{
            res(products)
        }, 1000)
    });
    const filtrado = products.filter(product => product.category === category)
    getProducts.then(data=>{
            category ? setItems(filtrado) : setItems(data)
    })
    .catch(err=>{console.log(err)})
        
        

        
    }, [category, items])
    
    if(items.length){
        return (
            
            <div className={s.containerItemList}>   
                {category? (<h1>{category}</h1>):(<div className={s.welcome}>{greeting} to Arnica Shop!</div>)}    
                
                <ItemList products={items} />
            </div>

        )
        }else{
            return(
                <Loader/>
            )
        }
}
