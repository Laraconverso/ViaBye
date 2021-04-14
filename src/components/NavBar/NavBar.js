import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';


function NavBar (){
    return(
    <Navbar collapseOnSelect expand="lg" className='navBar'>
        <Navbar.Brand href="#home">ViaBye</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Nav.Link href="#Inicio" className='menuList'>Inicio</Nav.Link>
                <Nav.Link href="#Vender">Vender</Nav.Link>
                <NavDropdown title="Comprar" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#Ropa">Ropa</NavDropdown.Item>
                    <NavDropdown.Item href="#Calzado">Calzado</NavDropdown.Item>
                    <NavDropdown.Item href="#Accesorios">Accesorios</NavDropdown.Item>
                </NavDropdown>
                <Link to="/Cart" className='Cart'><CartWidget/></Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavBar;

