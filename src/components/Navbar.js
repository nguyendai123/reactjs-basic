import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../views/nav/Nav";
import "../views/nav/Nav.scss";
import DataSearch from "../DataSearch";
import Homes from "./Pages/Home";
import Web from "./Pages/Web";
// import _ from "lodash";
class Navbar extends React.Component {
  state = {
    title: "",
  };
  handleOnChange = (e) => {
    this.setState({ title: e.target.value });
    console.log("check", this.state.title);
  };

  render() {
    let { title } = this.state;
    return (
      <>
        <nav className="navbar fixed-top bg-primary navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <i className="fa-solid fa-house" style={{ color: "#d714d0" }} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    activeClassName="active"
                    exact={true}
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Web"
                    activeClassName="active"
                    className="nav-link"
                    aria-current="page"
                  >
                    Web
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/Aps"
                    activeClassName="active"
                    className="nav-link"
                    aria-current="page"
                  >
                    App
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <NavLink
                    to="/Programming"
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Programming
                  </NavLink>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/Python" className="dropdown-item" href="#">
                        Python
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Java" className="dropdown-item" href="#">
                        Java
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/JavaScript"
                        className="dropdown-item"
                        href="#"
                      >
                        JavaScript
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <NavLink to="/other" className="dropdown-item" href="#">
                        Something else here
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">Disabled</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  value={title}
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(event) => this.handleOnChange(event)}
                />
                <button
                  className="btn btn-outline-success"
                  stype="submit"
                  onClick={() => this.handleOnSearch()}
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
export default Navbar;
