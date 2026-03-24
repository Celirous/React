import React, { Component } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { Table, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showDeleteDialog: false, //this is set to false so that it isnt always prompting you to delete, only when we click it (making that functionality now)
      selectedUser: {}, //this stores the user we want to delete so that we can grab that info and it doesnt delete everything
    };

    this.closeDeleteDialog = this.closeDeleteDialog.bind(this);
    this.delete = this.delete.bind(this);
  }

  openDeleteDialog(user) {
    //because we click the delete button, this runs
    this.setState({
      showDeleteDialog: true, //the "are you sure" becomes true to and it will give you the pop up warning
      selectedUser: user, // this now has the user ID or Key we clicked delete on is saved so that we can remove the correct thing
    });
  }

  closeDeleteDialog() {
    // this is to be able to close the modal and nothing breaks. Sets values back to before deleting button gets pressed
    this.setState({
      showDeleteDialog: false,
      selectedUser: {},
    });
  }

  delete(e) {
    const db = getDatabase();
    remove(ref(db, "/" + this.state.selectedUser.id))
      .then((x) => {
        console.log("SUCCESS");
        this.closeDeleteDialog();
      })
      .catch((error) => {
        alert("Could not delete the user.");
        console.log("ERROR", error);
      });
  }

  componentDidMount() {
    const db = getDatabase(); // we grab the database info and add it to db
    const dbRef = ref(db, "/"); // this is your route for the node where you can find the data in the DB

    onValue(dbRef, (snapshot) => {
      // this is like an event listener, so its looking for something to happen on the route node (dbRef). It grabs a snapshot of the data so that we can maybe read it later or use the data.
      console.log(snapshot.val());

      const data = snapshot.val();
      const usersArray = Object.entries(data).map(([id, value]) => ({
        //converts object to array for you, it grabs it from the value of the snapshot
        ...value,
        id: id, // explicitly attach the firebase key as the id
      }));

      this.setState({ users: usersArray }); // this set the state of the data to a readable array so that we can read the data or use the data that is coming in, in funcitons
    });
  }

  render() {
    const listUsers = this.state.users.map(
      (
        user, // the map works like a forloop by populating all the info from our database and display it for us
      ) => (
        <tr key={user.id}>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>
            <Link to={`/edit/${user.id}`}>
              <Button variant="dark">Edit</Button>
            </Link>
          </td>
          <td>
            <Button
              variant="danger"
              onClick={this.openDeleteDialog.bind(this, user)}
            >
              Remove
            </Button>
          </td>
        </tr>
      ),
    );
    return (
      <div>
        <br />
        <Link to="/add">
          <Button variant="success">Add</Button>
        </Link>
        <Table striped bordered hover>
          <thead>
            <br />
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{listUsers}</tbody>
        </Table>
        <br />
        <Modal
          show={this.state.showDeleteDialog}
          onHide={this.closeDeleteDialog}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure you want to delete:{" "}
              {this.state.selectedUser.username}?
            </p>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.delete}>
              Delete
            </Button>
            <Button variant="success" onClick={this.closeDeleteDialog}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default User;
