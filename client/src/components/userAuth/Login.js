import React, { Component } from "react";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    logged: false
  };

  changeHandler = e => {};

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.onSubmit}>
          <h5 className="grey-text text-darken-3">Login</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={this.changeHandler}
              value={this.state.email}
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
              value={this.state.password}
            />
          </div>

          <div className="input-field">
            <button type="submit" className="btn blue lighten-1 z-depth-0">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
