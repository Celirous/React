import React, { Component } from "react";
import axios from "axios"; // npm install axios
import { HashLoader } from "react-spinners";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from "react-bootstrap";

class GitHub extends Component {
  constructor() {
    super();
    // this.getGitHubData("darrel");
    this.state = {
      data: [],
      isLoading: false, //this is for the spinner, it is off on default and switches on when you start searching 
      searchTerm: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    // componentDidMount() {
    //   this.getGitHubData("damian");
    // }

  handleSubmit(e) {
    e.preventDefault(); // this prevents React from using the default submit action, therefore the page wont reload, only update 
    this.setState({
      isLoading: true, // this makes the spinner load when you start searching 
    });
    this.getGitHubData(this.state.searchTerm);
  }

  handleChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  getGitHubData(_searchTerm) {
    axios
      .get("https://api.github.com/search/users?q=" + _searchTerm)
      .then((res) => {
        this.setState({
          isLoading: false,
          data: res.data.items,
          searchTerm: _searchTerm,
        });
        // console.log(res.data.items);
      });
  }

  render() {
    const listUsers = this.state.data.map((user) => (
      <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
        <Card>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            <Card.Img src={user.avatar_url} alt="Generic placeholder" />
          </a>
          <Card.Body>
            <h5>Login: {user.login}</h5>
            <p>Id: {user.id}</p>
          </Card.Body>
        </Card>
        <br />
      </Col>
    ));

    return (
      <div>
        <br />
        <Form inline onSubmit={this.handleSubmit}>
          <Form.Group controlId="formInlineName">
            <Form.Control
              type="text"
              value={this.state.searchTerm}
              placeholder="Enter Search Term"
              onChange={this.handleChange}
            />
          </Form.Group>{" "}
          <Button type="submit">Search</Button>
          {/* <br /> */}
        </Form>
        {/* <h3>GitHub user results {_searchTerm}</h3> */}
        <br />
        {this.state.isLoading && <HashLoader />}
        <Row>{listUsers}</Row>
      </div>
    );
  }
}

export default GitHub;
