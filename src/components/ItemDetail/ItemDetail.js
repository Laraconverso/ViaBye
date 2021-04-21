import React from "react";
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'




const ItemDetail = ({data}) => { 

    return(
        <div className='detail'>
        <div>
            {data && data.length > 0
        ? data.map(item => {
            return (
                <div className='detail' key={data.id}>
                        <img src={data.img} alt="imagen producto" className='image'/>
                        <div className='info'>
                            <h3>{data.title}</h3>
                            <h5>{data.price}</h5>
                            <p>{data.descritption}</p>
                            <div className='btns'>
                                <ItemCount/>
                            </div>
                            <Link to="/"><Button variant="outlined">Volver</Button></Link>
                        </div>
                    </div>
            )
          })
        : "Cargando..."}

        </div>
        
    </div>)} 


export default ItemDetail;