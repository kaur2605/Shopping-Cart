import React, { Component } from 'react'

export default class Filter extends Component {

 render() {
  return (
   <div className="filter">
    <div className="count">{this.props.count}  Products</div>
    <div className="sorting"> Order<select value={this.props.sort} onChange={this.props.sortProducts}>
     <option value="Latest" >Latest</option>
     <option value="Lowest">Lowest</option>
     <option value="Highest">Highest</option>

    </select></div>
    <div className="filtersize">Filter<select value={this.props.size} onChange={this.props.filterProducts}>
     <option value="All">All</option>
     <option value="M">M</option>
     <option value="XS">XS</option>
     <option value="XXL">XXL</option>
     <option value="XL">XL</option>
     <option value="S">S</option>

    </select></div>

   </div>
  )
 }
}
