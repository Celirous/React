import React, { Component } from 'react';
import Products from "./Products";
import { Button } from 'react-bootstrap';
import Rating from "./Rating.js";
import JumboTronComponent from './JumboTronComponent';
import UserForm from "./UserForm";

class App extends Component {
  render() {
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

        <UserForm />

        <Products />
      </div>
    );
  }
}

export default App;