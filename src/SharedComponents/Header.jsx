import React, { Component } from "react";
import {Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <header className="mb-3 border-bottom bg-primary">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <h4 className="text-light ">Query Forum</h4>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-1 justify-content-center mx-5">
              <li>
                <Link to="/"
                  className="nav-link px-2 link-light"
                >
                  Posts
                </Link>
              </li>
              <li>
                <Link
                  to="/new-post/-1"
                  className="nav-link px-2 link-light"
                >
                  New Post
                </Link>
              </li>
             
            </ul>
            <p className="d-block mx-1 mb-1 text-light">Welcome, robin !</p>
          </div>
        </div>
      </header>
    );
  }
}
