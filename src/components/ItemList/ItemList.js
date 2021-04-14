import React, { Component } from 'react';
import Item from '../Item/Items';
import '../ItemListContainer/ItemListContainer.css'
import singleProduct from '../SingleProduct/SingleProduct'


class ItemList extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount (){
        setTimeout(() => {
            this.setState({
                products: singleProduct,
            })
        }, 1000);
    }
    render() {
        return(
            <div className='list'>
                {this.state.products.map((singleItem) =>{
                    return(
                        <Item singleProduct={singleItem} key={singleItem.id} />
                    )
                })}
            </div>
        )
    }
}

export default ItemList;
