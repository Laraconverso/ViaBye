import React, { useState, useEffect } from 'react';
import {ItemList} from '../ItemList/ItemList';
import {db} from '../Firebase/Firebase';
import './ItemListContainer.css'
//import ItemCount from '../ItemCount/ItemCount';
//import { useParams } from "react-router-dom";
//import productsPromise from "../SingleProduct/SingleProduct";
//import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';




export default function ItemListContainer ({ProductosDisponibles}){
    const [product, setProduct] = useState([])

    useEffect(() =>{
      const getData = async () => {
        const { docs } = await db.collection("singleProducts").get();
        const data = docs.map((item) => ({ id: item.id, ...item.data() }));
        setProduct(data);
      };
      getData();
    }, []);


    /*useEffect(() => {
        productsPromise.then((res) => {
      if (categoryId === undefined) {
        setProduct(res);
      } else {
        setProduct(res.filter((res) => res.categoria === categoryId));
      }
    });

  }, [categoryId]);*/


    return(
            <div className='list' >
                <h2>{ProductosDisponibles}</h2>
                {product ? <ItemList product={product}/> : 'Cargando...' }
            </div>
        );
}


//{product.length < 1 ? <h1>Cargando...</h1> : 
//<div className='items'><ItemList items={product} /> </div>}