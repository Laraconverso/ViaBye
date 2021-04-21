import React, { Component } from 'react';
import Item from '../Item/Items';
import { Data } from '../SingleProduct/SingleProduct';

class ItemListContainer  extends Component {

    constructor(){
        super();
        this.state = {
            round:[],
        };
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                round: Data,
            });
        }, 2000);
    }

    render (){
        return(
            <div >
                <h2>Productos Disponibles</h2>
                <Item data={this.state.round}/>
            </div>
        );
    }
        
}
export default ItemListContainer;