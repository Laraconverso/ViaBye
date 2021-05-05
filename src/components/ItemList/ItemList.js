import React from "react";
import { Item } from "../Item/Items";
//import {db} from '../Firebase/Firebase'
import '../ItemListContainer/ItemListContainer.css'


export const ItemList = ({product}) => {
  
  return (
    <div divclassName='list'>
      <Item product={product} />
    </div>
  );
};


