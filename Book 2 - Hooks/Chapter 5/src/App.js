import React, { Component } from 'react';
import Products from "./Products";
import { Button } from 'react-bootstrap';
import Rating from "./Rating.js";
import JumboTronComponent from './JumboTronComponent';

function App() {
  return (
      <div>

        {/* Example 1: Hardcoding jumbotron content in its own component. */}
        {/* <JumboTronComponent /> */}

        {/* Example 2: Pass content to jumbotron component via props object. */}
        {/* <JumboTronComponent body="Hello world" /> */}

        {/* Example 3: passing content from outside component via props children */}
        <JumboTronComponent>
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.
        </JumboTronComponent>

        <Products />
      </div>
    );
}

export default App;

// **Summary of the Code**

// This code defines the main **React class component** called `App`, which acts as the **root component** of the application. It organizes and renders other components such as a jumbotron section and a list of products.

// ---

// ### Key Points

// 1. **Imports**

//    * Imports `React` and `Component` from React.
//    * Imports several custom and external components:

//      * `Products` – displays a list of products.
//      * `Button` from **react-bootstrap** – a UI button component (not used in this snippet).
//      * `Rating` – a component likely used to display product ratings (also not used here).
//      * `JumboTronComponent` – a custom component for displaying a jumbotron-style section.

// ---

// 2. **App Component**

//    * `App` is a **class-based component** that extends `React.Component`.
//    * It contains a `render()` method that returns JSX used to structure the UI.

// ---

// 3. **Jumbotron Examples**
//    The code shows **three different ways to pass content to the `JumboTronComponent`**, but only one is active:

//    * **Example 1 (commented out):**
//      The jumbotron content is **hardcoded inside the component itself**.

//    * **Example 2 (commented out):**
//      Content is passed using a **prop (`body`)**.

//    * **Example 3 (active):**
//      Content is passed using **`props.children`**, allowing text or elements to be inserted between the component tags.

//    ```jsx
//    <JumboTronComponent>
//      This is a long sentence...
//    </JumboTronComponent>
//    ```

// ---

// 4. **Rendering Products**

//    * The `<Products />` component is included below the jumbotron.
//    * This component renders a list of products defined in another file.

// ---

// 5. **Export**

//    * The `App` component is exported as the default export so it can be used as the **main entry component** in the React application.

// ---

// **Overall:**
// The `App` component serves as the **main layout container** of the application. It demonstrates different ways to pass data to a component (`JumboTronComponent`) and renders the `Products` component that displays a list of products.
