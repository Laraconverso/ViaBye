import React from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css";

function ItemListContainer() {
    return (    
        <Jumbotron fluid>
            <Container>
            <h2>Productos disponibles</h2>
            <div>
                <ItemList/>
            </div>
            </Container>
      </Jumbotron>
    )
}


export default ItemListContainer;