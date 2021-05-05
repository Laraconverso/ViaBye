import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Items.css';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
//import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import {db} from '../Firebase/Firebase'


export const Item = () => {
  const [product , setProduct ] = useState();

  useEffect(() =>{
    const getData = async () => {
      const { docs } = await db.collection("singleProducts").orderBy("id", "asc").get();
      const data = docs.map((item) => ({ id: item.id, ...item.data() }));
      setProduct(data);
    };
    getData();
  }, []);

  return (
      <div className='list'>
        <div>
          {product && product.map((products)=>
          <div>
            <Card style={{ width: '20rem'}} className='card'>
              <Card.Img variant="top" src={products.imgURL} className='img' alt="imagen producto"/>
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Title>${products.price}</Card.Title>
                  <Link to={`/product/${products.id}`}><Button  className="bntInf"><AddCircleOutlineIcon/></Button></Link>
                </Card.Body>
            </Card>
          </div>
          ) }
        </div>
      </div>
  );
};
