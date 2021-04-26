import React from 'react'
import ButtonsHome from './ButtonsHome'
import {Link} from 'react-router-dom';

export default function Home () {
    return (
        <div>
           <h1>Bienvenidos a ViaBye</h1>
           <h3>¿Qué te interesa ver?</h3>
           <br></br>
           <Link to='/'>
            <ButtonsHome/>
           </Link>
            
        </div>
    );
}
