import React, {useState} from "react";
//import { useParams } from "react-router";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
import useCartContext from '../Context/CartContext';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ItemDetail = ({product}) => {
    const{handleCartItems} = useCartContext();
    const [cantidad, setQuantity] = useState(1);

    const CantidadItems = (value) => {
        setQuantity(value);
    }

    const addToCart = () => {
        handleCartItems({id: product.id, title: product.title, price: product.price}, cantidad);

    }

    return(
            <div className='detail'>
                <img src={product.imgURL} alt='imagen del producto' className='image'/>
                <div className='info'>
                    <h2>{product.title}</h2>
                    <h5>${product.price}</h5>
                    <h6>{product.itemDetail}</h6>
                    <div className='btns'>
                        <ItemCount onAdd={CantidadItems}/> 
                        <Button className="add" variant="outlined" onClick={addToCart}> <AddShoppingCartIcon/> Agregar </Button>
                        <br/>
                        <br/>
                        <Link to="/cart" ><Button variant="outlined">Terminar Compra</Button></Link>
                        <br/>
                        <br/>
                        <Link to="/" ><Button variant="outlined">Seguir Comprando</Button></Link>
                    </div>
                </div>
            </div>
        );  
};
export default ItemDetail;