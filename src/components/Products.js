import React, { Component } from 'react'
import formatCurrency from '../utils'

export default class Products extends Component {

  render() {
    return (
      <div>
        <ul className="lists">
          {this.props.products.map(product => (
            <li key={product.id} className="product-list">
              <img src={product.image} alt="product"></img>

              <p>
                {product.title}
              </p>
              <div className="price">
                {formatCurrency(
                  product.price)}
              </div>
              <div className="button">
                <button className="addtocart" onClick={() => this.props.addToCart(product)}>
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
