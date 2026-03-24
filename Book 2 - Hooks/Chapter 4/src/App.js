import React, { Component } from 'react';
import Products from "./Products";
import { Button } from 'react-bootstrap';
import Rating from "./Rating.js";

function App() {
  const isValid = true;
  return (
    <div>
      {/* Using the Rating object by itself */}
      {/* <Rating rating="1" />
        <Rating rating="2" />
        <Rating rating="3" />
        <Rating rating="4" />
        <Rating rating="5" /> */}
      <Products />
    </div>
  );
}

export default App;