import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

class JumboTronComponent extends Component {
  render() {
    return (
      <div>
        <Container fluid className="p-5 mb-4 bg-light rounded-3">
          <h1>Hello, world!</h1>
          {/* This was for when we added info into the <Jumbotron body="" /> tag */}
          {/* <p>{this.props.body}</p> */}

          {/* This is from example 3 where we add the stuff more dynamically */}
          <p>{this.props.children}</p>

          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
      </div>
    );
  }
}

export default JumboTronComponent;