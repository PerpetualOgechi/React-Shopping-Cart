import React from 'react'
import "./Product.css"
import { useContext } from 'react'
import { ShopContext} from '../../context/Shop-context'

const Product = (props) => {
    const {id, productImage, price, productName} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
  return (
    <div className='product'>
        <div >
            <img src={productImage}  alt="" />
        </div>
        
        <div className='details'>
            <p><b>{productName}</b></p>
            <p>${price}</p>
        </div>
        <button className='addToCartBtn' onClick={() => addToCart(id)}>Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</button>
    </div>
  )
}

export default Product