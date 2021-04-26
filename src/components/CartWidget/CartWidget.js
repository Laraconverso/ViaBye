import React from "react";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function CartWidget(){
    return(
        <div className="cart-icon" onClick={() => console.log('CartRoute')}>
            <ShoppingCartIcon></ShoppingCartIcon>
        </div>
    );
}
export default CartWidget;