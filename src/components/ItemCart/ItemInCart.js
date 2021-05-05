import React from 'react'
import { CartContext } from '../Context/CartContext'

const ItemCart= ({ id, img, title, price, amount }) => {
  const { remove, toggleAmount } = CartContext([])
  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        <button className='remove-btn' onClick={() => remove(id)}>
          Eliminar
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'inc')}>
        </button>
        <p className='amount'>{amount}</p>
        <button className='amount-btn' onClick={() => toggleAmount(id, 'dec')}>
        </button>
      </div>
    </article>
  )
}

export default ItemCart;