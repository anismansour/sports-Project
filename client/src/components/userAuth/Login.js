import React, { Component } from "react";

export class Login extends Component {
  state = {
    email: "",
    password: "",
    logged: false
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const loginResponse = await fetch("/api/users/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json"
      }
    });

    const parsedResponse = await loginResponse.json();
    if (parsedResponse.user) {
      this.props.doSetCurrentUser(parsedResponse.user);
      this.setState({
        logged: true
      });
    }
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
