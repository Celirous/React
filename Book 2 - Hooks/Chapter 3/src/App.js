import React, { Component } from 'react';
import Products from "./Products";
import { Button } from 'react-bootstrap';
import Rating from "./Rating.js";

function App() {
  const isValid = true;
  return (
    <div>
      {/* <h1>
          My Second React App!
        </h1>
        <Products />
        <Button variant="info" disabled={!isValid}>Default</Button> */}
      <Rating rating="0" />
      <Rating rating="2" />
      <Rating rating="3" />
      <Rating rating="4" />
      <Rating rating="5" />
    </div>
  );
}

export default App;