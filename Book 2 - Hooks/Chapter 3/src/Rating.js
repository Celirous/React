import React, { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

function Rating(props) {
    const [rating, setRating] = useState(props.rating);

    const handleClick = (ratingValue) => {
        setRating(ratingValue);
    };

    return (
        <div>
            <h1>Rating: {rating}</h1>

            {rating >= 1 ? (
                <IoIosStar onClick={() => handleClick(1)} />
            ) : (
                <IoIosStarOutline onClick={() => handleClick(1)} />
            )}

            {rating >= 2 ? (
                <IoIosStar onClick={() => handleClick(2)} />
            ) : (
                <IoIosStarOutline onClick={() => handleClick(2)} />
            )}

            {rating >= 3 ? (
                <IoIosStar onClick={() => handleClick(3)} />
            ) : (
                <IoIosStarOutline onClick={() => handleClick(3)} />
            )}

            {rating >= 4 ? (
                <IoIosStar onClick={() => handleClick(4)} />
            ) : (
                <IoIosStarOutline onClick={() => handleClick(4)} />
            )}

            {rating >= 5 ? (
                <IoIosStar onClick={() => handleClick(5)} />
            ) : (
                <IoIosStarOutline onClick={() => handleClick(5)} />
            )}
        </div>
    );
}

export default Rating;

// **Summary of the Code**

// This code defines a **React class component called `Rating`** that displays a **5-star rating system** using icons from the `react-icons` library. Users can **click on stars to change the rating**, and the component updates the display accordingly.

// ### Key Points

// 1. **Imports**

//    * `React` and `Component` are imported to create a React class component.
//    * `IoIosStar` and `IoIosStarOutline` icons are imported from `react-icons/io` to represent **filled** and **empty** stars.

// 2. **Component State Initialization**

//    * In the `constructor`, the component initializes its **state** with a `rating` value taken from `props`.

//    ```javascript
//    this.state = { rating: this.props.rating };
//    ```

//    * This allows the rating to be **dynamic and updated within the component**.

// 3. **handleClick Method**

//    * `handleClick(ratingValue)` updates the component state when a star is clicked.

//    ```javascript
//    this.setState({ rating: ratingValue });
//    ```

//    * This triggers a **re-render** so the UI reflects the new rating.

// 4. **Rendering the Rating UI**

//    * The component displays the current rating:

//    ```javascript
//    <h1>Rating: {this.state.rating}</h1>
//    ```

//    * It then renders **five stars**.
//    * Each star:

//      * Displays a **filled star (`IoIosStar`)** if the rating is equal to or greater than that star number.
//      * Displays an **outlined star (`IoIosStarOutline`)** otherwise.

// 5. **Interactive Stars**

//    * Each star has an `onClick` event:

//    ```javascript
//    onClick={this.handleClick.bind(this, 3)}
//    ```

//    * Clicking a star sets the rating to that number.

// 6. **Commented Example**

//    * The commented **Example 1** shows how the stars could be displayed using **props only** (read-only rating).
//    * **Example 2 (active code)** uses **local state**, allowing users to change the rating interactively.

// ### Overall Function

// The component creates an **interactive star rating system** where users can click on stars (1–5) to set a rating, and the interface updates dynamically to reflect the selected value.
