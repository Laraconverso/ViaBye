import React from 'react'; 
import './Items.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';

const Item = ({data}) => { 

    return(
        <div className='items'>
            {
                data.map((product) => {
                return(
                    <div className='producto'>
                       <li>
                            <Card style={{ width: '18rem'}}>
                                <Card.Img variant="top" src={product.img} className='img'/>
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Title>${product.price}</Card.Title>
                                    <ItemCount/>
                                    <Link to={`/product/${product.id}`}><Button  className="bntInf"><InfoIcon/></Button></Link>
                                </Card.Body>
                            </Card>
                        </li>
                    </div>
                )
                })
            }
    </div>
    )
}

export default Item;
