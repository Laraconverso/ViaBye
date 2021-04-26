import React, {useState} from "react";
//import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    const [inCart, setInCart] = useState(false);

    const addToCart = (count) =>{
        console.log("Usted agrego" , count);
        setInCart(true);
    };

    return(
        <>
            <div className='detail'>
                <img src={item.imgURL} alt='imagen del producto' className='image'/>
                <div className='info'>
                    <h2>{item.title}</h2>
                    <h5>${item.price}</h5>
                    <h6>{item.itemDetail}</h6>
                    <div className='btns'>
                        {inCart ? <Link to='/Cart'><Button variant="outlined" >Terminar Compra</Button></Link>  : <ItemCount onAdd={addToCart} /> }
                        <br/>
                        <br/>
                        <Link to="/"><Button variant="outlined">Volver</Button></Link>
                    </div>
                </div>
            </div>
        </>
    );  
};
export default ItemDetail;