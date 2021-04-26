import React, { useState, useEffect } from 'react';
//import ItemCount from '../ItemCount/ItemCount';
import { useParams } from "react-router-dom";
import productsPromise from "../SingleProduct/SingleProduct";
import {ItemList} from '../ItemList/ItemList';
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';


export default function ItemListContainer ({ProductosDisponibles}){
    const [product, setProduct] = useState([])
    const { categoryId } = useParams();

    useEffect(() => {
        productsPromise.then((res) => {
      if (categoryId === undefined) {
        setProduct(res);
      } else {
        setProduct(res.filter((res) => res.categoria === categoryId));
      }
    });
  }, [categoryId]);
  console.log(product);

    return(
            <div className="list">
                <h2>{ProductosDisponibles}</h2>
                {product.length < 1 ? <h1>Cargando...</h1> : 
                <div className='items'><ItemList items={product} /> </div>
                 }
            </div>
        );
}
