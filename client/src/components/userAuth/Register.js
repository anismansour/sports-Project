import React, { Component } from "react";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    };
  }

  changeHandler = e => {};

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.onSubmit}>
          <h5 className="grey-text text-darken-3">Register</h5>
          <div className="input-field">
            <label htmlFor="name">name</label>
            <input type="text" name="name" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={this.changeHandler} />
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={this.changeHandler}
            />
          </div>

          <div className="input-field">
            <button type="submit" className="btn blue lighten-1 z-depth-0">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
