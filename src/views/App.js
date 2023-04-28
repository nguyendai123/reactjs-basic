import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Mycomponent from "./Example/Mycomponent";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./nav/Nav";
import Home from "./nav/Home";
import ListUser from "./Users/ListUser";
import DetailUser from "./Users/DetailUser";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailUsers from "./Users/DetailUser";
import Navbar from "../components/Navbar";
import Homes from "../components/Pages/Home";
import Web from "../components/Pages/Web";
import Python from "../components/Pages/Python";
// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <header className="App-header">
//       <Nav />
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>

//         {/* <Mycomponent/> */}
//         {/* <ListTodo/> */}
//         {/* <Nav/> */}
//         <Switch>
//           <Route path="/" exact>
//             <Home />
//           </Route>
//           <Route path="/about">
//             <Mycomponent />
//           </Route>
//           <Route path="/todo">
//             <ListTodo />
//           </Route>
//           <Route path="/user" exact>
//           <ListUser/>
//           </Route>
//           <Route path="/user/:id">
//             <DetailUser/>
//           </Route>

//         </Switch>
//       </header>

//       <ToastContainer
//       position="top-right"
//       autoClose={5000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="light"
// />
// {/* Same as */}
// <ToastContainer />
//     </div>

//     </Router>
//   );
// }

import Product from "../components/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homes />
          </Route>
          <Route path="/Web">
            <Web />
          </Route>
          <Route path="/Aps">
            <Mycomponent />
          </Route>
          <Route path="/Programming">
            <Product />
          </Route>
          <Route path="/Python">
            <Python />
          </Route>
          <Route path="/Java">
            <Product />
          </Route>
          <Route path="/JavaScript">
            <Product />
          </Route>
          <Route path="/other">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
