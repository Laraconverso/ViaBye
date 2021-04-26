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
    if (count > 1) {
      setCount(count - 1)
    }
  };

  const addToCart = () => {
    onAdd(count);
  };


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
          <br/>
          <div>
            <Button className="add" variant="outlined" onClick={addToCart}> <AddShoppingCartIcon/> Agregar </Button> 
          </div>
      </div>

    );
}

export default ItemCount;