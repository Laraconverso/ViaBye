import React from 'react'
import imagen from './Pic.png'; 
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import "./ItemListContainer.css";

function ItemListContainer({greeting}) {
    return (    
        <Jumbotron fluid>
            <Container>
            <h3 className="titulo">{greeting}</h3>
            <div>
                <Image className="imagen" src={imagen} rounded />
            </div>
            </Container>
      </Jumbotron>
    )
}


export default ItemListContainer;