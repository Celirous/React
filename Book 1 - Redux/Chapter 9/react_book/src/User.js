import React, { Component } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Table } from 'react-bootstrap';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    const db = getDatabase(); // we grab the database info and add it to db
    const dbRef = ref(db, "/"); // this is your route for the node where you can find the data in the DB

    onValue(dbRef, (snapshot) => {
      // this is like an event listener, so its looking for something to happen on the route node (dbRef). It grabs a snapshot of the data so that we can maybe read it later or use the data.
      console.log(snapshot.val());

      const data = snapshot.val(); // we are grabbing the value of the actual snapshot
      const usersArray = Object.values(data); //converts object to array for you, it grabs it from the value of the snapshot

      this.setState({ users: usersArray }); // this set the state of the data to a readable array so that we can read the data or use the data that is coming in, in funcitons
    });
  }

  render() {
    const listUsers = this.state.users.map((user) => ( // the map works like a forloop by populating all the info from our database and display it for us
      <tr key={user.id}>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>Edit</td>
        <td>Remove</td>
      </tr>
    ));
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </Table>
      </div>
    );
  }
}

export default User;
