import React, {useEffect, useState} from 'react'; 
import ItemDetail from '../ItemDetail/ItemDetail'
import {Data} from '../SingleProduct/SingleProduct'


function ItemDetailContainer (match){
    const data = Data;
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
 
    const getProducts = new Promise((resolve, reject) => {
        const prod = data.find((elem) => {
          return elem.id === match.match.params.id;
        });
        setTimeout(() => {
          setItem(prod);
          resolve({ item });
        });
      }, 2000);

      useEffect(() => {
        getProducts.then((data) => {
          setItem(data);
          setLoading(false);
        });
        //eslint-disable-next-line
      }, [loading]);

      return(
        <div className="list">
        {!loading && <ItemDetail data={item} />}
        </div>
      )
}
export default ItemDetailContainer;