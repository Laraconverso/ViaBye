import React from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import "./ItemList.css";


function ItemList() {
    return (    
        <Jumbotron fluid>
            <Container>
            <div>
                <ItemListContainer/>
            </div>
            </Container>
      </Jumbotron>
    )
}


export default ItemList;