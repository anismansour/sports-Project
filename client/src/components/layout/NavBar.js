import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import GameDetails from "../gameList/GameDetail";

export class NavBar extends Component {
  render() {
    return (
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <Link to="/" className="brand-logo left">
            Home
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    );
  }
}

export default NavBar;
