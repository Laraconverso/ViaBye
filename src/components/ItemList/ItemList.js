import React from 'react'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ItemListContainer from '../ItemListContainer/ItemsListContainer';
//import { Link } from 'react-router-dom';
import "./ItemList.css";
import Item from '../Item/Items'



function ItemList() {
    return (    
        <Jumbotron fluid>
            <Container>
            <div>
                <ItemListContainer>
                    <Item/>
                </ItemListContainer>
            </div>
            </Container>
      </Jumbotron>
    )
}


export default ItemList;