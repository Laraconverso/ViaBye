import React, { Component } from 'react';
import './ItemCount.css';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';



class ItemCount extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
        stock: 15,
        min:0,
      };
    }

    handleIncrement = () => {
      this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        if(this.state.count === 0){
            this.setState({ count:0 });
          }else {
            this.setState({ count: this.state.count - 1 });
          }
    };

    addToCart = () => {
      if(this.state.count <1){
        alert(`No se agrega item por falta de cantidad.`);
      } else{
        console.log(
          `Agregaste ${this.state.count} items a tu carrito` 
        );
      }
    }
  

    render() {
      return (
        <div className="Contador-container">
          <div></div>
            <p className='cantidad'>{this.state.count}</p>
            <div className='Buttons-container'>
            <Button className="less" variant="outlined" color="secondary"onClick={this.handleDecrement} size='small'>
                -
              </Button>
              <Button  className="plus" variant="outlined" color="secondary" onClick={this.handleIncrement} size='small'>
                +
              </Button>
            </div>
            <div>
              <Button className="add" variant="outlined" onClick={this.addToCart}> <AddShoppingCartIcon/> Agregar </Button> 
            </div>
        </div>

      );
    }
  }

export default ItemCount;