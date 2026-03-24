import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'

function UserForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        var emailValid = false;

        if (email.length == 0) {
            setEmailError("Email is required");
        }
        else if (email.length < 6) {
            setEmailError("Email should be minimum 6 characters");
        }
        else if (email.indexOf(' ') >= 0) {
            setEmailError('Email cannot contain spaces');
        }
        else {
            setEmailError("")
            emailValid = true
        }

        var passwordValid = false;

        if (password.length == 0) {
            setPasswordError("Password is required");
        }
        else if (password.length < 6) {
            setPasswordError("Password should be minimum 6 characters");
        }
        else if (password.indexOf(' ') >= 0) {
            setPasswordError('Password cannot contain spaces');
        }
        else {
            setPasswordError("")
            passwordValid = true
        }
        
        if (emailValid && passwordValid) {
            alert('Email: ' + email + '\nPassword: ' + password);
            setEmail("");
            setPassword("");
        }
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={event =>
                        setEmail(event.target.value)} value={email} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                {emailError.length > 0 &&
                    <Alert variant="danger">{emailError}</Alert>}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} value={password} />
                </Form.Group>
                {passwordError.length > 0 &&
                    <Alert variant="danger">{passwordError}</Alert>}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            Email entered: {email}
            <br />
            Password entered: {password}
        </div>
    );
}

export default UserForm;

// ### Overview

// This code defines a **React functional component** called `UserForm` that renders a user input form with **email and password fields**, using **React hooks** and **React-Bootstrap components**.

// ---

// ### Key Features

// **1. State Management**

// * Uses `useState` to manage:

//   * `email` and `password` input values
//   * `emailError` and `passwordError` for validation messages

// ---

// **2. Form Validation (on submit)**

// * When the form is submitted (`handleSubmit`):

//   * Prevents default form behavior
//   * Validates both fields:

//   **Email rules:**

//   * Cannot be empty
//   * Must be at least 6 characters
//   * Cannot contain spaces

//   **Password rules:**

//   * Cannot be empty
//   * Must be at least 6 characters
//   * Cannot contain spaces

// * Sets appropriate error messages if validation fails

// * If both are valid:

//   * Displays an alert with the entered email and password
//   * Resets both input fields

// ---

// **3. UI Rendering**

// * Uses `react-bootstrap` components (`Form`, `Button`, `Alert`) to build the UI
// * Shows error messages conditionally using `<Alert>` components
// * Displays the current values of email and password below the form (live preview)

// ---

// ### Behavior Summary

// * Users type into email/password fields → state updates in real time
// * On submit:

//   * Invalid input → error messages shown
//   * Valid input → alert popup + form reset

// ---

// ### Purpose

// This component demonstrates a **basic controlled form in React** with **client-side validation and user feedback**.


