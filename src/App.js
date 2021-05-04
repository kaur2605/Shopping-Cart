import React, { Component } from 'react'
import Data from './Data.json'
import Products from './components/Products';
import Filter from './components/Filter'
import Cart from './components/Cart'
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: Data.products,
      sort: "",
      size: "",
      cartItems: []
    }
  }
  removeItem = (item) => {
    const cartItems = this.state.cartItems;
    this.setState({ cartItems: cartItems.filter(x => x._id !== item._id) })

  }

  addToCart = (product) => {
    console.log("im clicked");
    let alreadyAdded = false;
    const cartItems = this.state.cartItems;

    cartItems.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyAdded = true;
      }
    })

    if (!alreadyAdded) {
      cartItems.push({ ...product, count: 1 })
    }
    this.setState({ cartItems })

  }

  sortProducts(event) {
    const sort = event.target.value;
    console.log(sort);






  }


  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({
        size: event.target.value,
        products: Data.products
      })
    }
    else {
      this.setState({
        size: event.target.value,
        products: Data.products.filter(data => data.availableSizes.indexOf(event.target.value) >= 0)
      })

    }


  }


  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">Product Shopping list</h1>
          <h1 className="header-title">Admin</h1>
        </header>
        <main className="main">
          <div >
            <Filter count={this.state.products.length}
              size={this.state.size}
              sort={this.state.sort}
              sortProducts={this.sortProducts}
              filterProducts={this.filterProducts}
            />
            <Products products={this.state.products} addToCart={this.addToCart} />

          </div>
          <div className="sidebar">
            <Cart cartItems={this.state.cartItems} removeItem={this.removeItem} />
          </div>
        </main>
        <footer className="footer">
          all right reserved
        </footer>

      </div>
    )
  }
}
