import React, { useState } from 'react';
import axios from 'axios';
import { ClimbingBoxLoader } from "react-spinners";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form, Button } from 'react-bootstrap';

const GitHub = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        getGitHubData(searchTerm);
    };

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const getGitHubData = async (_searchTerm) => {
        try {
            const res = await axios.get(`https://api.github.com/search/users?q=${_searchTerm}`);
            setData(res.data.items);
            setIsLoading(false);
        } catch (err) {
            console.error(err);
            setIsLoading(false);
        }
    };

    const listUsers = data.map((user) => (
        <Col key={user.id} xs={12} sm={6} md={4} lg={3}>
            <Card>
                <a href={user.html_url}>
                    <Card.Img src={user.avatar_url} alt="Generic placeholder" />
                </a>
                <Card.Body>
                    <h5>Login: {user.login}</h5>
                    <p>Id: {user.id}</p>
                </Card.Body>
            </Card>
        </Col>
    ));

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formInlineName">
                    <Form.Control
                        type="text"
                        value={searchTerm}
                        placeholder="Enter Search Term"
                        onChange={handleChange}
                    />
                </Form.Group>
                {' '}
                <Button type="submit">
                    Search
                </Button>
            </Form>

            <h3>GitHub Users Results</h3>
            {isLoading && <ClimbingBoxLoader />}
            <Row>{listUsers}</Row>
        </div>
    );
};

export default GitHub;



// Here’s a clear, concise summary of your code:

// ---

// ### Overview

// This is a React functional component called **`GitHub`** that allows users to search for GitHub profiles using the GitHub API and displays the results in a responsive card layout.

// ---

// ### Key Features

// * **State Management (React Hooks):**

//   * `data`: stores the list of GitHub users returned from the API.
//   * `searchTerm`: tracks the user’s input.
//   * `isLoading`: controls the loading spinner visibility.

// * **User Input Handling:**

//   * `handleChange`: updates `searchTerm` as the user types.
//   * `handleSubmit`: prevents page reload, triggers API call, and sets loading state.

// * **API Call:**

//   * Uses `axios` to fetch users from:

//     ```
//     https://api.github.com/search/users?q=<searchTerm>
//     ```
//   * On success: stores results in `data`.
//   * On failure: logs the error and stops loading.

// * **Loading Indicator:**

//   * Displays a spinner (`ClimbingBoxLoader`) while data is being fetched.

// * **Rendering Results:**

//   * Maps over `data` to create Bootstrap cards for each user.
//   * Each card shows:

//     * User avatar (clickable link to profile)
//     * Username (`login`)
//     * User ID

// * **Layout & Styling:**

//   * Uses React Bootstrap components (`Form`, `Button`, `Row`, `Col`, `Card`) for a responsive UI grid.

// ---

// ### Flow of the App

// 1. User types a search term.
// 2. Submits the form.
// 3. App sends a request to GitHub API.
// 4. Shows loading spinner.
// 5. Displays user results as cards once data is received.

// ---

// ### In Short

// It’s a simple GitHub user search app built with React that fetches data from an external API, manages loading state, and displays results in a clean, responsive layout.
