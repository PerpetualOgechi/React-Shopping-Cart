import React from 'react'
import "./Shop.css"
import {PRODUCTS} from "../../Product"
import Product from "./Product"

const Shop = () => {
  return (
    <div className='shop'>
        <div className='shop-title'>
            <h1>GD Clothing Store</h1>
        </div>
        <div className='list-item'>
          {" "}
          {PRODUCTS.map((product) => (<Product data={product} />))}
        </div>
    </div>
  )
}

export default Shop