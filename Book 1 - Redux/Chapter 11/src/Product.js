import React, { Component } from 'react';
import Card from "react-bootstrap/Card";
import Rating from "./Rating.js";

class Product extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={this.props.data.imageUrl} />
                <Card.Body>
                    <Card.Title>{this.props.data.productName}</Card.Title>
                    {this.props.data.releasedDate}
                    <Rating
                        rating={this.props.data.rating}
                        numOfReviews={this.props.data.numOfReviews}
                    />
                    {/* <p>Number of reviews: {this.props.data.numOfReviews}</p> */}
                    <Card.Text>
                        {this.props.data.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default Product;