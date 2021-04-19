import React from "react";
//import { useParams } from "react-router";
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import product from '../Item/Items'


function ItemDetail () { 
    return(
        <div className='detail' key={product.id}>
            <img src={product.imgURL} alt="imagen producto" className='image'/>
            <div className='info'>
                <h3>{product.title}</h3>
                <h5>{product.price}</h5>
                <p>{product.descritption}</p>
                <div className='btns'>
                    <ItemCount/>
                </div>
                <Link to="/"><Button variant="outlined">Volver</Button></Link>
           </div>
    </div>
    )  
};
export default ItemDetail;