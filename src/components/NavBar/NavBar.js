import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link} from 'react-router-dom'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';


function NavBar (){
    return(
    <Navbar collapseOnSelect expand="lg" className='navBar'>
        <Navbar.Brand href="/">ViaBye</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
                <Link to="/Home" className='menuList'>Inicio</Link>
                <Link to="/Sell" className='menuList'>Vender</Link>
                <NavDropdown title="Comprar" id="collasible-nav-dropdown" >
                    <NavDropdown.Item><Link to='/category/ropa' className='dropd'>Ropa</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/category/calzado' className='dropd'>Calzado</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/category/acce' className='dropd'>Accesorios</Link></NavDropdown.Item>
                    <NavDropdown.Item><Link to='/' className='dropd'>Ver Todo</Link></NavDropdown.Item>
                </NavDropdown>
                <Link to="/Cart" className='Cart'><CartWidget/></Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavBar;

//<NavDropdown.Item href="#Ropa">Ropa</NavDropdown.Item>
//<NavDropdown.Item href="#Calzado">Calzado</NavDropdown.Item>
//<NavDropdown.Item href="#Accesorios">Accesorios</NavDropdown.Item>

