import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import useCartContext from '../Context/CartContext';
import { db } from '../Firebase/Firebase';

// eslint-disable-next-line
const Checkout = ({}) => {
   const { orderId, newOrder } = useCartContext();
   const [order, setOrder] = useState();
   const history = useHistory();

   if(!orderId) {
        history.push("/");
    }

    useEffect(() => {
        const ordersCollection = db.collection("orders");
        const getOrderById = ordersCollection.doc(orderId); 
            getOrderById.get().then((response) => {      
            setOrder({id: response.id, ...response.data()});
        });
    }, [orderId]);

    return (
    <div>
        <div>
            <div >
                <h1>Producto</h1>
            </div>
            <div>
                {order ?
                    <>
                        <h2>¡Tu compra ha sido realizada con éxito!</h2>
                        <h3>Datos personales:</h3>
                        <p><b>Nombre:</b> {order.buyer.name}</p>
                        <p><b>Apellido:</b> {order.buyer.lastname}</p>
                        <p><b>E-mail:</b> {order.buyer.email}</p>
                        <h3>Detalles de la compra:</h3>
                        {order.items.map((item) => (
                            <p key={item.name}><b>{item.name}:</b> x{item.quantity} | ${item.price}</p>
                        ))}
                        <hr/>
                        <p><b>ID de compra:</b> {order.id}</p>
                        <p><b>Total:</b> ${order.total}</p>
                        <h2>¡Gracias por elegirnos!</h2>
                        <button onClick={newOrder}>Nueva compra</button>
                    </> 
                : 'Procesando...'}
            </div>
            <div>
                <Link to={`/`}>
                    <div>Volver a productos</div>
                </Link>
            </div>
        </div>
    </div>
   );
}
export default Checkout;