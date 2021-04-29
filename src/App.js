import React, { Component } from 'react'
import Data from './Data.json'
import Products from './components/Products'

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
          Product Shopping list
        </header>
        <main>
          <div className="main">
            <Products products={this.state.products} />

          </div>
        </main>
        <footer>
          all right reserved
        </footer>

      </div>
    )
  }
}
