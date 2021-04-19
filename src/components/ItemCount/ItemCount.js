import React, { useState } from 'react';
import './ItemCount.css';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function ItemCount(){
  const [count, setCount] = useState(0)

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
    if(count <1){
      alert(`No se agrega item por falta de cantidad.`);
    } else{
      console.log(
        `Agregaste ${count} items a tu carrito` 
      );
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