import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const UserContext = React.createContext();
const username = 'Greg';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* Example 1: Props drilling */}
    {/* <App username={username} /> */}

    {/* Example 2: Using Context Object */}
    {/* <UserContext.Provider value={username}>
      <App />
    </UserContext.Provider> */}

    {/* TODO APP */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
