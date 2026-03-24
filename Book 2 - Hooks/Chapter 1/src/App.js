import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>
          My Second React App!
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// Summary
// In this chapter, we have been introduced to the core building blocks of React apps which are components.
// We have also been introduced to the React development experience which is creating a new React project
// with create-react-app. create-react-app provides internal compilation which automatically generates our app for
// us that we can view on the browser. It is a great tool for developers, whether beginner or advanced. Keep
// an eye on its changes in GitHub as more functionality is added to it. In the next chapter, we will begin
// implementing a React app.

