import React, {  useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Items.css';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';


export const Item = ({ item }) => {
  const element = useRef();

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      console.log("interseccion");
    });
    observer.observe(element.current);
    console.log(element);
    console.log(observer);
    observer.disconnect();
  }, []);

  return (
    <>
      <div ref={element}>
        <div>
          <Card style={{ width: '20rem'}} className='card'>
              <Card.Img variant="top" src={item.imgURL} className='img' alt="imagen producto"/>
              <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Title>${item.price}</Card.Title>
                  <ItemCount/>
                  <Link to={`/product/${item.id}`}><Button  className="bntInf"><InfoIcon/></Button></Link>
              </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
