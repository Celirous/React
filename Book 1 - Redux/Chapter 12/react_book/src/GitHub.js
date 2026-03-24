import React, { Component } from 'react';
import axios from 'axios'; // npm install axios
import { ClimbingBoxLoader } from "react-spinners";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button, Nav } from 'react-bootstrap';

class GitHub extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchTerm: '',
            isLoading: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            isLoading: true
        });

        this.getGitHubData(this.state.searchTerm);
    }

    handleChange(e) {
        this.setState({ searchTerm: e.target.value });
    }

    async getGitHubData(_searchTerm) {
        try {
            const res = await axios.get(`https://api.github.com/search/users?q=${_searchTerm}`);

            this.setState({
                data: res.data.items,
                isLoading: false,
            });

            // console.log(res.data.items);
        } catch (err) {
            console.error(err);
        }
    }

    render() {

        const listUsers = this.state.data.map((user) => (
            <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <Nav.Link href={`/github/user/${user.login}/${user.id}`}>
                        <Card.Img src={user.avatar_url} alt="Generic placeholder" />
                    </Nav.Link>
                    <Card.Body>
                        <h5>Login: {user.login}</h5>
                        <p>Id: {user.id}</p>
                    </Card.Body>
                </Card>
            </Col>
        ));

        return (
            <div>
                <Form inline onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formInlineName">
                        <Form.Control
                            type="text"
                            value={this.state.searchTerm}
                            placeholder="Enter Search Term"
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    {' '}
                    <Button type="submit">
                        Search
                    </Button>
                </Form>

                <h3>GitHub Users Results</h3>
                {this.state.isLoading && <ClimbingBoxLoader />}
                <Row>{listUsers}</Row>
            </div>
        );
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.getGitHubData('greg');
    //     }, 2000); // 2 seconds
    // }
}

export default GitHub;