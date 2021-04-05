import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import Comprar from './Comprar.js'

function NavBar (){
    return(
        <nav className='navBar'>
            <ul>
                <li>
                    <h1 className='nameBrand'>ViaBye</h1>
                </li>
                <li>
                    <a href='#inicio' className='menulist'>Inicio</a>
                </li>
                <li>
                    <a href='#comprar' className='menulist'>Comprar<Comprar/></a>
                </li>
                <li>
                    <a href='#vender' className='menulist'>Vender</a>
                </li>
                <li>
                    <a href='#faq' className='menulist'>FAQ</a>
                </li>
                <li>
                    <a href='#cart' className='menulist'><CartWidget/></a>
                </li>
            </ul>

        </nav>
    );
}

export default NavBar;

