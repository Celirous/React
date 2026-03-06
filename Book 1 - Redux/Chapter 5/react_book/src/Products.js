import React, { Component } from "react";
import Product from "./Product";
// import JumboTronComponent from "./JumboTronComponent";

class Products extends Component {
  products;

  constructor(props) {
    super(props);
    this.products = this.getProducts();
  }

  getProducts() {
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id
          rutrum ligula purus sit amet mauris. `,
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id
          rutrum ligula purus sit amet mauris. `,
        rating: 2,
        numOfReviews: 12,
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id
          rutrum ligula purus sit amet mauris. `,
        rating: 5,
        numOfReviews: 2,
      },
    ];
  }
  render() {
    const listProducts = this.products.map((product) => (
      <Product key={product.productName} data={product} />
    ));
    return (
      <div>
        

        <h1>This is my first React App</h1>
        <br />
        {/* EXAMPLE 1 - If statement */}
        {/* {listProducts.length > 0 && <ul>{listProducts}</ul>}
        {/* we are using === so that is a strict operator, checking for data */}
        {/* {listProducts.length === 0 && <ul>No Products to display</ul>}  */}

        {/* EXAMPLE 2 - If else statment in one line, if there products are more than 0 it will display listProducts else it will show the ul No Products - the ":" is the else*/}
        {listProducts.length > 0 ? (<ul>{listProducts}</ul>) : (<ul>No Products to display</ul>)}
        
      </div>
    );
  }
}

export default Products;
