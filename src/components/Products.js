import React, { Component } from 'react'
import formatCurrency from '../utils'

export default class Products extends Component {

 render() {
  return (
   <div>
    <ul className="lists">
     {this.props.products.map(product => (
      <li key={product.id} className="product-list">
       <a href="#">
        <img src={product.image} alt="product-photo"></img>
       </a>
       <p>
        {product.title}
       </p>
       <div class="price">
        {formatCurrency(
         product.price)}
       </div>
       <div class="button">
        <button class="addtocart">
         Add to Cart
        </button>
       </div>

      </li>
     ))}

    </ul>


   </div>
  )
 }
}
