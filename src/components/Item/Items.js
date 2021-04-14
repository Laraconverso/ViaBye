import React from 'react'; 
import './Items.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';

function Items ({singleProduct}){
    return(
        <div className='items'>
            <div>
                <li>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={singleProduct.imgURL} className='img'/>
                        <Card.Body>
                            <Card.Title>{singleProduct.title}</Card.Title>
                            <Card.Title>${singleProduct.price}</Card.Title>
                            <ItemCount/>
                            <Link to="/ItemDetailContainer"><Button  className="bntInf"><InfoIcon/></Button></Link>
                        </Card.Body>
                    </Card>
                </li>
            </div>
        </div>
    );
}

export default Items;