import React, {useEffect, useState} from 'react'; 
//import productsPromise from '../SingleProduct/SingleProduct';
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router';
import {db} from '../Firebase/Firebase'


const ItemDetailContainer = () => {
    const [productId, setProductId] = useState();
    const {id} = useParams();

    useEffect(() =>{
      const getData = async () => {
        const { docs } = await db.collection("singleProducts").get();
        const data = docs.map((item) => ({ id: item.id, ...item.data() }));
        setProductId(data);
      };
      getData();
    }, [id]);

    return(
            <div>
              { productId ? <ItemDetail product={productId}/>  : 'Cargando...'}
            </div>
        );
};

export default ItemDetailContainer;