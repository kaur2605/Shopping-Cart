import React, { Component } from 'react'

export default class Products extends Component {

 render() {
  return (
   <div>
    <ul className="list">
     {this.props.products.map(product => (
      <li key={product.id}>
       <a href="#">
        <img src={product.image} alt="product-photo"></img>
       </a>
       <p>
        {product.title}
       </p>
       <div class="price">
        {product.price}
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
