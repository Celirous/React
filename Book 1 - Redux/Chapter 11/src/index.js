import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyBg7ulcbfZMJ-GHQXot_VPoWhBhMNyL5vY",
  authDomain: "user-manager-app-f88b8.firebaseapp.com",
  projectId: "user-manager-app-f88b8",
  storageBucket: "user-manager-app-f88b8.firebasestorage.app",
  messagingSenderId: "1097578808977",
  appId: "1:1097578808977:web:0d0688333d44d2257f2130"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
