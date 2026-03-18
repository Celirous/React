import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';

function GitHubUser() {
  const { login, id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User Login: {login}</h1>
      <h2>User Id: {id}</h2>
      <Button variant="primary" onClick={() => navigate("/github")}>
        Go to GitHub Users
      </Button>
    </div>
  );
}

export default GitHubUser;

// ### Summary of the Code

// This code defines a React functional component called GitHubUser that displays information about a specific GitHub user based on parameters in the URL.

// The component uses React Router hooks to access routing data. The useParams hook retrieves dynamic values (login and id) from the URL, allowing the component to display the selected user's login name and ID. The useNavigate hook enables programmatic navigation within the application.

// The component renders the user's login and ID on the page and includes a React-Bootstrap button. When the button is clicked, it navigates the user back to the /github route, which likely displays a list of GitHub users.

// In short:
// This component reads user information from the URL, displays it on the page, and provides a button to navigate back to the GitHub users page.