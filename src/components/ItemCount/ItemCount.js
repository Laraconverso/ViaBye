import React, { useState } from 'react';
import './ItemCount.css';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ItemCount = ({ onAdd }) =>{

  console.log(onAdd);
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1)
    } else {
      return
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      return
    }
  };

  const addToCart = () => {
    if (count > 0){
      console.log("Se agregaron items a tu carrito")
    }else{
      alert("Operacion no posible")
    }
    
  }


    return (
      <div className="Contador-container">
        <div></div>
          <p className='cantidad'>{count}</p>
          <div className='Buttons-container'>
          <Button className="less" variant="outlined" color="secondary"onClick={decrement} size='small'>
              -
            </Button>
            <Button  className="plus" variant="outlined" color="secondary" onClick={increment} size='small'>
              +
            </Button>
          </div>
          <div>
            <Button className="add" variant="outlined" onClick={addToCart}> <AddShoppingCartIcon/> Agregar </Button> 
          </div>
      </div>

    );
}

export default ItemCount;