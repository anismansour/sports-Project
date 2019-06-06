import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SignedOutLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/register"> Sign in</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedOutLinks;
