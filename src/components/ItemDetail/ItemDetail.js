import React from 'react'; 
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';


function ItemDetail() {
    return(
        <div className='detail'>
            <img src='https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' alt="imagen producto" className='image'/>
            <div className='info'>
                <h3>Remera Black</h3>
                <h5>$1000</h5>
                <p>Remera 80% algodón 70% poliester</p>
                <div className='btns'>
                    <ItemCount/>
                </div>
                <Link to="/ItemListContainer"><Button variant="outlined">Volver</Button></Link>

            </div>
            
        </div>
    );
}

export default ItemDetail;