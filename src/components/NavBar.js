import React from 'react';

function NavBar (){
    return(
        <nav className='navBar'>
            <h1 className='nameBrand'>ViaBye</h1>
            <ul>
                <li>
                    <a href='#inicio' className='menulist'>Inicio</a>
                </li>
                <li>
                    <a href='#comprar' className='menulist'>Comprar </a>
                </li>
                <li>
                    <a href='#vender' className='menulist'>Vender</a>
                </li>
                <li>
                    <a href='#faq' className='menulist'>FAQ</a>
                </li>
            </ul>

        </nav>
    );
}

export default NavBar;