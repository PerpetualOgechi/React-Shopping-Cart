import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import {Link} from "react-router-dom"
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav">
        <h1>GD Clothing</h1>
        <div className="link"> 
            <Link to="/">Shop</Link>
            <Link to="/cart">
                <ShoppingCart size={32}  />
            </Link>
        </div>
    </div>
  )
}

export default Nav