import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";

function JumboTronComponent(props) {
  return (
    <div>
      <Container fluid className="p-5 mb-4 bg-light rounded-3">
        <h1>Hello, world!</h1>
        {/* Hardcoding JumboTron */}
        {/* This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information. */}
        {/* Hardcoded data passed in from the outside */}
        {/* {props.body} */}
        {/* Dynamic insertion of content */}
        <p>
          {props.children}
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Container>
    </div>
  );
}

export default JumboTronComponent;

// Purpose
// Reusable Jumbotron/hero component in React using React Bootstrap.

// Functionality

// Class component (extends Component) that renders a styled banner section.

// Uses Container for layout and Button for a call-to-action.

// Dynamic Content

// Displays content passed between the component tags using this.props.children.

// Output
// A Bootstrap-styled hero section with a heading, dynamic text, and a “Learn more” button.