import React, { Component } from 'react';
import './ItemCount.css';
import Button from '@material-ui/core/Button';


class ItemCount extends Component {
    constructor() {
      super();
      this.state = {
        count: 0,
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
  

    render() {
      return (
        <div className="Contador-container">
          <div></div>
            <p>{this.state.count}</p>
            <div className='Buttons-container'>
              <Button  className="plus" variant="outlined" color="secondary" onClick={this.handleIncrement} size='small'>
                +
              </Button>
              <Button className="less" variant="outlined" color="secondary"onClick={this.handleDecrement} size='small'>
                -
              </Button>
            </div>
        </div>

      );
    }
  }

export default ItemCount;