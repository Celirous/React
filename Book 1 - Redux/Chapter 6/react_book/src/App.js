import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Products from "./Products";
import { Button } from 'react-bootstrap';
import Rating from "./Ratings";
import Product from "./Product";
import JumboTronComponent from "./JumboTronComponent";


class App extends Component {
  render() {
    return (
      <div>
        {/* EXAMPLE 1: Hardcoding jumbotron content in its own component */}
        {/* <JumboTronComponent /> */}

        {/* EXAMPLE 2: Pass content to jumbotron content via props objects */}
        {/* <JumboTronComponent body="Incerting content dynamically" /> */}

        {/* EXAMPLE 3: Passing content from outside component via props.children */}
        {/* Anything in this opening and closing tags, that can be added to the jumbotron we built, this is referred to 'children'. So to call it we will say this.porps.children */}
        <JumboTronComponent> 
          This is a long sentence, and I want to insert content into the
          jumbotron component from the outside.

        </JumboTronComponent>
        
        <Products />
      </div>
    );
  }
}

export default App;
