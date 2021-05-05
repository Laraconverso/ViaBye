import { createContext, useContext, useState } from 'react';
import { db } from '../Firebase/Firebase';

export const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {
  const [itemCart, setItemsInCart] = useState([]);
    const [orderId, setOrderId] = useState();
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [confirmationEmail, setConfirmationEmail] = useState('');
    const [error, setErrror] = useState('');

    const handleCartItems = (product, cantidad) => {
        const productInCart = itemCart.find((p) => p.id === product.id);
        if(productInCart){
            productInCart.cantidad += cantidad;
            setItemsInCart([...itemCart]);
        }else{
          setItemsInCart([...itemCart, {...product, cantidad}]);
        }
    }

    const ItemCount = () => {
        return itemCart.reduce((acc, p) => (acc += p.cantidad), 0);
    }

    const deleteItem = (item) => {
        for(var i = 0; i < itemCart.length; i++){
            if ( itemCart[i].id === item) {
              itemCart.splice(i, 1);
            }
        }
        setItemsInCart([...itemCart])
    }

    const totalPrice = () => {
        return itemCart.reduce((a, b) => a + (b.price * b.cantidad), 0);
    }
 
    const buyItems = (e) => {
       e.preventDefault();
       const sell = {
          buyer: {
             name: name,
             lastname: lastname,
             email: email
          },
          items: itemCart,
          total: totalPrice()
       };

       let validCharEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

       if(name === '' || lastname === '' || email === '' || confirmationEmail === '') {
            setErrror('Complete todos los campos.');
        } else if (!email.match(validCharEmail)) {
            setErrror('Ingrese un e-mail válido.');
        } else if(confirmationEmail !== email){
            setErrror('Los e-mail deben coincidir.');
        } else {
          const orders = db.collection("orders");
          orders.add(sell).then(({id}) => {
             setOrderId(id);
          }).catch(error => {
             alert(error);
          });
       }
    }

    const newOrder = () => {
        setOrderId();
        setName();
        setLastname();
        setEmail();
        setItemsInCart([]);
    }


  return( 
    <CartContext.Provider value={{itemCart, ItemCount, handleCartItems, deleteItem, totalPrice, buyItems, setName, setLastname, setConfirmationEmail, setEmail, setOrderId, orderId, error, newOrder}}>
      {children}
    </CartContext.Provider>
  );
}

export default useCartContext;