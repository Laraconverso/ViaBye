import React, { Component } from 'react';
import Item from '../Item/Items';
import '../ItemListContainer/ItemListContainer.css'
//import one from './img/producto1.jpg';
//import two from './img/producto2.jpg';
//import three from './img/producto3.jpg';


const list = [
    {id:"1" , title: "Remera", price:"1000", imgURL:'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' },
    {id:"2" , title: "Campera", price:"4500", imgURL:'https://images.unsplash.com/photo-1616360706118-9468e6616211?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=642&q=80'},
    {id:"3" , title: "Pantalon", price:"1900", imgURL:'https://images.unsplash.com/photo-1614251056216-f748f76cd228?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'},
    //{id:"4" , title: "Zapatillas", price:"2300", imgURL:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=686&q=80'}
] 

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
                products: list,
            })
        }, 2000);
    }
    render() {
        return(
            <div className='list'>
                {this.state.products.map((singleProduct) =>{
                    return(
                        <Item singleProduct={singleProduct} key={singleProduct.id} />
                    )
                })}
            </div>
        )
    }
}

export default ItemList;
