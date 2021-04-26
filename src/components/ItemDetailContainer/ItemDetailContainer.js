import React, {useEffect, useState} from 'react'; 
import productsPromise from '../SingleProduct/SingleProduct';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router';


const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();
    console.log(id);

    useEffect(() => {
        productsPromise.then((resp) => {
            setItem(resp.find((li) => li.id === id));
          });
        }, );
        console.log(item);

    return(
            <div className="list">
                <ItemDetail item={item}/>
            </div>
        );
};

export default ItemDetailContainer;