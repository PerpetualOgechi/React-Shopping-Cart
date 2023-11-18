import React, { useContext } from 'react'
import { PRODUCTS } from '../../Product'
import { ShopContext } from '../../context/Shop-context'
import CartItem from './Cart-item'
import "./Cart.css"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext)
  const totalAmount = getTotalCartAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div className='header'>
      <h1>Your Cart Items</h1>
      </div>
      <div className='cartItem'>
        {PRODUCTS.map((product) =>{
          if (cartItems[product.id] !==0) {
            return <CartItem data={product} />
          }
        })}
      </div>
{totalAmount > 0?
      <div className='checkOut'>
        <p className='subtotal'>Subtotal: ${totalAmount}</p>

        <div>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
        </div>

      </div>
      : <h1 className='empty'>Your Cart Is Empty </h1>}
    </div>
  )
}

export default Cart