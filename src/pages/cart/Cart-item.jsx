import React from 'react'
import "./Cart-item.css"
import { useContext } from 'react'
import { ShopContext } from '../../context/Shop-context'


const CartItem = (props) => {
    const {id, productImage, price, productName} = props.data
    const {cartItems, addToCart, removeFromCart, updateCartItemCount,  } = useContext(ShopContext)

   
    
    
  return (
    <div className='cartItems'>
        <div className='imageContainer'>
        <img src={productImage} alt="" />
        </div>
        
        <div className='description'>
            <p>
                {" "}
                <b>{productName}</b>
            </p>
            <p>Price: ${price}</p>
            
            <div className='countHandler'>
              <button onClick={() => removeFromCart(id)}> - </button>
              
              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
              <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>

    </div>
  )
}

export default CartItem