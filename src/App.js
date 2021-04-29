import React, { Component } from 'react'
import Data from './Data.json'
import Products from './components/Products'
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: Data.products,
      size: "",
      sort: "",
    }
  }


  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">Product Shopping list</h1>
          <h1 className="header-title">Admin</h1>

        </header>
        <main>
          <div className="main">
            <Products products={this.state.products} />

          </div>
        </main>
        <footer className="footer">
          all right reserved
        </footer>

      </div>
    )
  }
}
