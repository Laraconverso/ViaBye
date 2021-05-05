import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useCartContext from '../Context/CartContext'


function CartWidget(){
    const {ItemCount} =useCartContext();
    
    return(
        <div className="cart-icon" onClick={() => console.log('CartRoute')}>
            <div>
                <div className="cart-number"></div>
                <ShoppingCartIcon>{ItemCount()}</ShoppingCartIcon>
            </div>
        </div>
    );
}
export default CartWidget;