import React, { useState, useEffect } from 'react';
import Item from '../Item/Items';
import '../ItemList/ItemList'
import singleProduct from '../SingleProduct/SingleProduct'

function ItemListContainer (){
    const [product, setProduct] = useState([])

    useEffect(() => {
        setTimeout(() => {
            setProduct(singleProduct)
        }, 2000)
    }, [])

    return(
            <div className="list">
                <h2>Productos Disponibles</h2>
                <Item products={product} key={product.id}/>
            </div>
        )
}
export default ItemListContainer;