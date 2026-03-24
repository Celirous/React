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
            {/* Example 1: INLINE IF USING && OPERATOR (Two if statements) */}
            {/* {listProducts.length > 0 &&
                    <ul>{listProducts}</ul>
                }
                {listProducts.length === 0 &&
                    <ul>No Products to display</ul>
                } */}

            {/* EXAMPLE 2:  If else statement*/}
            {listProducts.length > 0 ? (
                <ul>{listProducts}</ul>
            ) : (
                <ul>No Products to display</ul>
            )}
        </div>
    );
}

export default Products;


// **Summary of the Code**

// This code defines a **React class component** called `Products` that displays a list of products using another component named `Product`.

// ### Key Points

// 1. **Imports**

//    * Imports `React` and `Component` from React.
//    * Imports a `Product` component from a local file (`./Product`), which is used to render individual product items.

// 2. **Products Data**

//    * The component contains a method `getProducts()` that returns an **array of product objects**.
//    * Each product object includes:

//      * `imageUrl` – URL of the product image
//      * `productName` – name of the product
//      * `releasedDate` – release date
//      * `description` – product description text
//      * `rating` – product rating
//      * `numOfReviews` – number of reviews

// 3. **Constructor**

//    * The constructor calls `getProducts()` and assigns the returned list to `this.products`.

// 4. **Rendering Products**

//    * In the `render()` method:

//      * The `map()` function converts each product object into a `Product` component.
//      * Each `Product` component receives its data via the `data` prop.
//      * `productName` is used as the `key` for React list rendering.

// 5. **Conditional Rendering**

//    * The component checks whether products exist:

//      * If the list has items → displays them inside a `<ul>`.
//      * If the list is empty → displays `"No Products to display"`.
//    * Two approaches are shown:

//      * **Inline `&&` conditional rendering** (commented out)
//      * **Ternary operator (`? :`)** (currently used)

// 6. **Export**

//    * The component is exported as the default export so it can be used in other parts of the React application.

//  **Overall:**
// The component stores a predefined list of products, converts them into `Product` components, and conditionally renders them in a list depending on whether products are available.
