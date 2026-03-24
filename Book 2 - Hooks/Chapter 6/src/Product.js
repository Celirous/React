import React from "react";
import Card from "react-bootstrap/Card";
import Rating from "./Rating.js";

function Product(props) {
    const { data } = props;

    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={data.imageUrl} />
            <Card.Body>
                <Card.Title>{data.productName}</Card.Title>
                {data.releasedDate}
                <Rating
                    rating={data.rating}
                    numOfReviews={data.numOfReviews}
                />
                <p>Number of reviews: {data.numOfReviews}</p>
                <Card.Text>
                    {data.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;