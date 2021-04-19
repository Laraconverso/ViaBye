import React, {useEffect, useState} from 'react'; 
import singleProduct from '../SingleProduct/SingleProduct';
import ItemDetail from '../ItemDetail/ItemDetail'
import Items from '../Item/Items';

const ItemDetailContainer = producto => {
    const [product, setProduct] = useState([Items.id])

    useEffect(() => {
        setTimeout(() => {
            setProduct(singleProduct)
        }, 2000)
    }, [])

    return(
            <div className="list">
                <ItemDetail producto={product.id}/>
            </div>
        )
}

export default ItemDetailContainer;