import React, { Component } from "react";
import {
    Link
} from "react-router-dom";

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput:""
    }
  }

  handleOnChange = (event) => {
      this.setState({searchInput: event.target.value});
  }

  handleSubmit = (event) => {
      event.preventDefault();
      this.props.setSearchQuery(this.state.searchInput);
      console.log(this.state.searchInput)
  }
  render() {

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <Link className="navbar-brand ms-3" to="/">
          FactFlux
          </Link>
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

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-3 mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                Technology
                </Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0 ms-auto d-flex" onSubmit={this.handleSubmit}>
              <input
                className="form-control mr-sm-2 mx-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchInput}
                onChange={this.handleOnChange}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0 me-2"
                type="submit" 
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
