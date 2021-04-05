import React from 'react'
import imagen from './Pic.png'; 
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./ItemListContainer.css";

function ItemListContainer() {
    return (    
        <Jumbotron fluid>
            <Container>
            <h2 className="titulo">Compra y vende ropa vintage en un solo lugar.</h2>
            <Row>
                <Col xs={6} md={4}>
                        <Image className='imagen' src={imagen} rounded />
                </Col>
            </Row>
            </Container>
      </Jumbotron>
    )
}

export default ItemListContainer;