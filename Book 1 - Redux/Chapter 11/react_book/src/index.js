import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "./reducer";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";

const destination = document.querySelector("#container");

const store = configureStore({ // this creates a Redux store. Single javascript object that holds all the data/state in the entire app
  reducer: {
    cart: cartReducer, // this is a function, it will manage the cart's state, You can access this again later, 
  },
});

const root = ReactDOM.createRoot(document.querySelector("#container")); // this will find the div called container and tells react to render everything inside of it. 

root.render(
  <Provider store={store}> 
    <App />
  </Provider>
);

//SUMMARY:
// index.js is the entry point of the app. It creates the Redux store using configureStore,
// which holds all of the app's state in one place. The cartReducer is registered under "cart"
// and is responsible for managing the cart's state (products and total cost). The Provider
// wraps the App component and gives every component in the tree access to the store. Finally,
// ReactDOM finds the #container div in index.html and renders the entire app inside it.





//============================================
//                  OLD WORK
//============================================

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// // Import the functions you need from the SDKs you need
// import reportWebVitals from './reportWebVitals';
// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// const firebaseConfig = {

//   apiKey: "AIzaSyBg7ulcbfZMJ-GHQXot_VPoWhBhMNyL5vY",
//   authDomain: "user-manager-app-f88b8.firebaseapp.com",
//   projectId: "user-manager-app-f88b8",
//   storageBucket: "user-manager-app-f88b8.firebasestorage.app",
//   messagingSenderId: "1097578808977",
//   appId: "1:1097578808977:web:0d0688333d44d2257f2130"
// };

// // Initialize Firebase

// const app = initializeApp(firebaseConfig);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
