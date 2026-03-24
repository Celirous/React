import React, { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Card from "react-bootstrap/Card";

function Rating(props) {
    const [rating, setRating] = useState(props.rating);

    const handleClick = (ratingValue) => {
        setRating(ratingValue);
    };

    return (
        <div>
            {/* Using styles to change the color of the stars */}
            <div style={styles.starStyle}>
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
        </div>
    );
}

export default Rating;

const styles = {
    starStyle: {
        color: "orange"
    }
};