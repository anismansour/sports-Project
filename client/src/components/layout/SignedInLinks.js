import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class SignedInLinks extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink
            to={`/user/${this.props.user._id}`}
            user={this.props.user}
            name={this.props.user.name}
          >
            {" "}
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" onClick={this.props.doLogout}>
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {this.props.name}
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default SignedInLinks;
