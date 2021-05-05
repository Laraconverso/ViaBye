import React from 'react'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom';

export default function Home () {
    return (
        <div>
            <h1>Bienvenido a ViaBye</h1>
            <h3>¿Qué te interesa ver?</h3>
            <br></br>
            <Button>
                <Link to='/category/tops'>Tops</Link>
            </Button>
            <Button>
                <Link to='/category/abrigos'>Abrigos</Link>
            </Button>
            <Button>
                <Link to='/category/bottom'>Bottoms</Link>
            </Button>
            <Button>
                <Link to='/category/clazado'>Calzado</Link>
            </Button>
            <Button>
                <Link to='/category/acc'>Accesorios</Link>
            </Button>
            <Button>
                <Link to='/'>Ver Todo</Link>
            </Button>
        </div>
    );
}
