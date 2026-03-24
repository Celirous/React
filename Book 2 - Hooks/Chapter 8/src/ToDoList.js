import React, { useContext, useState } from 'react';
import { TodosContext } from './App';
import { Button, Table, Form } from 'react-bootstrap';

function ToDoList() {
    // receive state and dispatch from index.js
    const { state, dispatch } = useContext(TodosContext);
    const [todoText, setTodoText] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [editTodo, setEditTodo] = useState(null);
    const buttonTitle = editMode ? "Edit" : "Add";

    const handleSubmit = event => {
        event.preventDefault();

        if (editMode) {
            dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
            setEditMode(false);
            setEditTodo(null);
        }
        else {
            dispatch({ type: 'add', payload: todoText })
        }

        setTodoText("") // to clear field after adding
    }

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Enter To Do"
                        value={todoText}
                        onChange={event => setTodoText(event.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    {buttonTitle}
                </Button>
            </Form>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>To Do</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {state.todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.text}</td>
                            <td onClick={() => {
                                setTodoText(todo.text)
                                setEditMode(true)
                                setEditTodo(todo)
                            }}>
                                <Button variant='secondary'>
                                    Edit
                                </Button>
                            </td>
                            <td onClick={() =>
                                dispatch({ type: 'delete', payload: todo })}>
                                <Button variant='danger'>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}

export default ToDoList;


// This code defines a **React functional component** called `ToDoList` that manages and displays a list of to-do items using **React Context** and **React Bootstrap UI components**.

// ### Key Features:

// * **State Management (Context API):**

//   * Uses `useContext` to access global `state` (list of todos) and `dispatch` (to update them) from `TodosContext`.

// * **Local State:**

//   * `todoText`: stores the input value.
//   * `editMode`: determines whether the user is editing or adding a todo.
//   * `editTodo`: stores the todo currently being edited.

// * **Add & Edit Functionality:**

//   * A form allows users to input a task.
//   * On submit:

//     * If in edit mode → dispatches an `'edit'` action with updated text.
//     * Otherwise → dispatches an `'add'` action to create a new todo.
//   * Input field is cleared after submission.

// * **Display Todos:**

//   * Renders a table listing all todos from `state.todos`.
//   * Each row shows:

//     * The todo text
//     * An **Edit button** (loads the selected todo into the input field and enables edit mode)
//     * A **Delete button** (dispatches a `'delete'` action)

// * **UI Components:**

//   * Uses `Form`, `Button`, and `Table` from `react-bootstrap` for styling and layout.

// ---

// ### Overall:

// This component provides a simple CRUD interface (Create, Read, Update, Delete) for managing a to-do list using React hooks and context for state management.
