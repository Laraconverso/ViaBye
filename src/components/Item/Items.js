import './Items.css';
import ItemCount from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';


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
                        </Card.Body>
                    </Card>
                </li>
            </div>
        </div>
    );
}

export default Items;