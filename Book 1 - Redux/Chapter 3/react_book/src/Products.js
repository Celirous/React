import React, { Component } from "react";

class Products extends Component {
  render() {
    const products = ["Learning React", "Pro React", "Beginning React"];
    const listProducts = products.map((product) => ( // the .map is what is basically looping out the info we have inside the class product in the Products.js file, so that it can desplay all the info we have 
      <li key={product.toString()}>{product}</li> 
    ));
    return (
      <div>
        <ul>{listProducts} </ul>
      </div>
    );
  }
}

export default Products;
