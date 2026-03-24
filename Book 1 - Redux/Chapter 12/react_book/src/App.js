import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";


class App extends React.Component {
  state = { requested: "" };
  render() {
    return (
      <div>
        <Button
          variant="link"
          onClick={() =>
            this.setState({
              requested: "https://jsonplaceholder.typicode.com/posts",
            })
          }
        >
          Posts
        </Button>
        <Button
          variant="link"
          onClick={() =>
            this.setState({
              requested: "https://jsonplaceholder.typicode.com/todos",
            })
          }
        >
          Todos
        </Button>
        <br />
        Requested: {this.state.requested}
      </div>
    );
  }
}
export default App;
