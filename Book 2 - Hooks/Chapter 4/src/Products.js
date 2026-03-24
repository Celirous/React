import React from "react";
import Product from "./Product";

function Products() {
    const getProducts = () => {
        return [
            {
                imageUrl: "http://loremflickr.com/150/150?random=1",
                productName: "Product 1",
                releasedDate: "May 31, 2016",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.`,
                rating: 4,
                numOfReviews: 2
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=2",
                productName: "Product 2",
                releasedDate: "October 31, 2016",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.`,
                rating: 2,
                numOfReviews: 12
            },
            {
                imageUrl: "http://loremflickr.com/150/150?random=3",
                productName: "Product 3",
                releasedDate: "July 30, 2016",
                description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim ex faucibus nulla, id rutrum ligula purus sit amet mauris.`,
                rating: 5,
                numOfReviews: 2
            }
        ];
    };

    const products = getProducts();

    const listProducts = products.map((product) => (
        <Product key={product.productName} data={product} />
    ));

    return (
        <div>
            <h2>Products</h2>
            <ul>{listProducts}</ul>
        </div>
    );
}

export default Products;

// **Summary of the Code**

// This code defines a **React class component called `Products`** that manages and displays a list of product items by rendering multiple `Product` components.

// ### Key Points

// * The component **imports**:

//   * `React` and `Component` from React.
//   * A custom `Product` component from `./Product`.

// * The `Products` component:

//   * Extends `React.Component`.
//   * Stores a list of products in the **`products` property**.
//   * Initializes this list in the **constructor** by calling the `getProducts()` method.

// * The **`getProducts()` method**:

//   * Returns an **array of product objects**.
//   * Each object contains:

//     * `imageUrl` – image for the product
//     * `productName` – name of the product
//     * `releasedDate` – release date
//     * `description` – product description
//     * `rating` – rating value
//     * `numOfReviews` – number of reviews

// * In the **`render()` method**:

//   * The `products` array is processed using **`.map()`**.
//   * Each product object is passed to a **`Product` component** via the `data` prop.
//   * `productName` is used as a **unique `key`** for each component.

// * The component outputs:

//   * A heading **"Products"**
//   * A list of `Product` components displayed inside a `<ul>` element.

// ### Overall Purpose

// The `Products` component acts as a **container component** that stores product data and dynamically generates multiple `Product` components to display a list of products.