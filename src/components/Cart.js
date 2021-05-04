import React, { Component } from 'react'
import formatCurrency from '../utils'

export default class Cart extends Component {
  render() {

    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (<div className="cart cart-header">Cart is empty</div>
        ) : (<div className="cart cartheader">you have {cartItems.length} Items in the cart</div>)}


        <div>
          <ul className="cart-items">
            {cartItems.map((item) =>

              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title}></img>
                </div>
                <div>
                  {item.title}
                </div>
                <div>
                  {formatCurrency(
                    item.price)} x {item.count} {""}
                  <button onClick={() => this.props.removeItem(item)}>Remove</button>
                </div>

              </li>
            )}

          </ul>
        </div>
        <div>
          <div className="cart">
            <div className="total">
              <div>
                Total:{" "}
                {formatCurrency(
                  cartItems.reduce((a, c) => a + c.price * c.count, 0)
                )}
              </div>
              <button
                onClick={() => {
                  this.setState({ showCheckout: true });
                }}
                className="button primary"
              >
                Proceed
                  </button>
            </div>
          </div>
        </div>
      </div>)

  }
}
