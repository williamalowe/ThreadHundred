import React, { useContext } from 'react'
import { CartContext } from '../App/App'

const Cart = () => {
  const { cart } = useContext(CartContext);

  // const calcTotal = () => {
  //   let val = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     val += cart[i].price;
  //   }
  //   return val;
  // }

  return (
    <div>
      
    </div>
  )
}

export default Cart
