import { connect } from "react-redux";
import Cart from "./Cart";

function mapStateToProps(state) { // this picks waht pieces of state your components needs to access. In this case, the states that it is accessing is totalCost of cart and the products in the cart
  return {
    totalCost: state.cart.totalCost,
    productCart: state.cart.productCart,
  };
}

function mapDispatchToProps(dispatch) { //dispatch is how you send actions to Reduxt store to update the state. 
  return {
    onAddProduct: (productName, productPrice) => // we create a prop called onAddProduct that the Cart component can call. 
      dispatch({
        type: "addProduct", // when we dispatch "addProduct", the reducer's switch statement matches this action type. and runs the addProduct case, which updates the productName and productPrice in the state. 
        productData: {
          productName: productName,
          productPrice: productPrice,
        },
      }),
    onDeleteProduct: (productData) =>
      dispatch({
        type: "deleteProduct", //  when we dispatch "deleteProduct", the reducer's switch statement matches this action type and runs the deleteProduct case, which removes the product from the cart and updates the total cost. 
        productData: productData,
      }),
  };
}

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Cart);

export default connectedComponent;

//SUMMARY:
// In short — mapStateToProps gives your component read access to the store, mapDispatchToProps gives it write access to the store, and connect joins them all together onto the Cart component.





























//============================================
//                  OLD WORK
//============================================

// import React, { Component } from "react";
// import { Button } from "react-bootstrap";
// import Rating from "./Rating.js";
// import JumboTronComponent from "./JumboTronComponent";

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Nav, Navbar } from "react-bootstrap";

// import Products from "./Products";
// import Hello from "./Hello.js";
// import GitHubUser from "./GitHubUser";
// import { getApp } from "firebase/app";
// import User from "./User.js";

// import UserForm from "./UserForm";
// import GitHub from "./GitHub";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log(getApp());
//   }

//   render() {
//     return (
//       <div>
//         <BrowserRouter>
//           <div>
//             <Routes>
//               <Route path="/edit/:id" element={<UserForm />} />
//               <Route path="/add" element={<UserForm />} />
//               <Route exact path="/" element={<User />} />
//               <Route path="/*" element={<NotFound />} />
//             </Routes>
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;

// class Header extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Navbar bg="light" expand="lg">
//             <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="mr-auto">
//                 <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="/github">GitHub</Nav.Link>
//                 <Nav.Link href="/hello">Hello</Nav.Link>
//               </Nav>
//             </Navbar.Collapse>
//           </Navbar>

//           <Routes>
//             <Route path="/github/user/:login/:id" element={<GitHubUser />} />
//             <Route path="/github" element={<GitHub />} />
//             <Route path="/hello" element={<Hello />} />
//             <Route exact path="/" element={<Home />} />
//             <Route path="/*" element={<NotFound />} />
//           </Routes>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// class Home extends Component {
//   render() {
//     return <div>Home</div>;
//   }
// }

// class NotFound extends Component {
//   render() {
//     return <div>Not Found</div>;
//   }
// }
