import React, { useReducer } from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from "uuid";

const todosInitialState = {
  todos: [],
};

function todosReducer(state, action) {
  switch (action.type) {

    case "get":
      return { ...state, todos: action.payload };

    case "add":
      // const newToDo = { id: uuidv4(), text: action.payload };
      // add new todo onto array
      const addedToDos = [...state.todos, action.payload];
      // spread our state and assign todos
      return { ...state, todos: addedToDos };

    case "edit":
      const updatedToDo = { ...action.payload };
      const updatedToDoIndex = state.todos.findIndex(
        (t) => t.id === action.payload.id,
      );
      const updatedToDos = [
        ...state.todos.slice(0, updatedToDoIndex),
        updatedToDo,
        ...state.todos.slice(updatedToDoIndex + 1),
      ];
      return { ...state, todos: updatedToDos };

    case "delete":
      const filteredTodoState = state.todos.filter(
        (todo) => todo.id !== action.payload.id,
      );
      return { ...state, todos: filteredTodoState };
    default:
      return todosInitialState;
  }
}

export const TodosContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(todosReducer, todosInitialState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <ToDoList />
    </TodosContext.Provider>
  );
}

export default App;

// This code defines the **main application component (`App`)** for a React to-do list app, using the **`useReducer` hook** and **Context API** to manage global state.

// ---

// ### Key Features:

// * **Initial State:**

//   * `todosInitialState` contains a predefined list of todo items, each with an `id` and `text`.

// * **Reducer Function (`todosReducer`):**

//   * Handles all state updates based on dispatched actions:

//   * **`add`:**

//     * Creates a new todo with a unique ID using `uuidv4`.
//     * Adds it to the existing todos array.

//   * **`edit`:**

//     * Finds the todo by ID.
//     * Replaces it with an updated version while keeping the rest of the list unchanged.

//   * **`delete`:**

//     * Removes a todo by filtering it out based on its ID.

//   * **`default`:**

//     * Returns the initial state if the action type is unrecognized.

// * **Context Setup:**

//   * Creates `TodosContext` using `React.createContext()`.
//   * This allows state and dispatch to be shared across components.

// * **State Management with `useReducer`:**

//   * `useReducer` is used instead of `useState` for more structured state updates.
//   * Provides:

//     * `state`: current todos
//     * `dispatch`: function to trigger actions

// * **Component Composition:**

//   * Wraps the `ToDoList` component inside `TodosContext.Provider`.
//   * Passes `{ state, dispatch }` so child components can access and modify the todos.

// ---

// ### Overall:

// This file acts as the **central state manager** for the app. It defines how todos are added, edited, and deleted, and shares this logic with the rest of the app using React’s Context API.

// =================================================================

// OLD CODE

// =================================================================

// import React, { Component, useContext, useReducer } from 'react';
// import Products from "./Products";
// import { Button } from 'react-bootstrap';
// import Rating from "./Rating.js";
// import JumboTronComponent from './JumboTronComponent';
// import UserForm from "./UserForm";
// import GitHub from './GitHub';
// import { UserContext } from './index.js';

// const initialState = {
//   count: 0
// }

// function App(props) {
//   const value = useContext(UserContext);
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       {/* Example 1: Props drilling */}
//       {/* {props.username} */}

//       {/* Example 2: Consuming Data from context object */}
//       {/* <UserContext.Consumer>
//         {value => <div>Received, {value}</div>}
//       </UserContext.Consumer> */}

//       {/* Example 3: Using useContext Hook */}
//       {/* Received, {value} */}

//       {/* Example 4: Using useReducer */}
//       Count: {state.count}
//       <br />
//       <Button onClick={() => dispatch({ type: 'increment' })}>
//         Increment
//       </Button>
//       <Button variant="secondary" onClick={() => dispatch({
//         type:
//           'decrement'
//       })}>
//         Decrement
//       </Button>
//       <Button variant="success" onClick={() => dispatch({
//         type:
//           'reset'
//       })}>
//         Reset
//       </Button>
//     </div>
//   );
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 }
//     case "decrement":
//       return { count: state.count - 1 }
//     case "reset":
//       return initialState
//     default:
//       return initialState
//   }
// }

// export default App;
