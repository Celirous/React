import React, { Component } from 'react';

function Products() {
    const products = ["Learning React", "Pro React", "Beginning React"];
    const listProducts = products.map((product) =>
        <li key={product.toString()}>{product}</li>
    );

    return (
        <div>
            <ul>{listProducts}</ul>
        </div>
    );
}

export default Products;

// **Summary of the Code**

// This code defines a **React class component** called `Products`. The component displays a list of product names on a webpage.

// ### How it works

// 1. **Import React**

//    * The code imports `React` and `Component` from the React library so a class component can be created.

// 2. **Create the Component**

//    * `Products` extends `Component`, meaning it inherits React component functionality.

// 3. **Define Product Data**

//    * Inside the `render()` method, an array called `products` is created:

//    ```javascript
//    ["Learning React", "Pro React", "Beginning React"]
//    ```

// 4. **Generate List Items**

//    * The `map()` function loops through the `products` array.
//    * Each product is converted into an `<li>` element.
//    * A unique `key` is assigned using `product.toString()` to help React efficiently update the list.

// 5. **Render Output**

//    * The component returns JSX that displays the products inside an unordered list (`<ul>`).

// 6. **Export Component**

//    * `export default Products;` allows the component to be imported and used in other files.

// **In short:**
// The component takes a list of product names, converts them into list items using `map()`, and renders them as an unordered list in the UI.
