import React from "react";
import useCartContext from "../Context/CartContext";

export const Cart = () => {
  const {totalPrice} = useCartContext();

  return (
    <div>
      <h1>Tu Carrito </h1>
      <h4>Total ${totalPrice() ? totalPrice() : 0}</h4>
    </div>
  );
}