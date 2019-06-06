import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Register extends Component {
  state = {
    name: "",
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
    const registerResponse = await fetch("/api/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json"
      }
    });

    const parsedResponse = await registerResponse.json();
    if (parsedResponse.name) {
      // this.props.doSetCurrentUser(parsedResponse.user);
      this.setState({
        logged: true
      });
    }
  };

  render() {
    const { name, password, email, logged } = this.state;
    console.log(logged, "<=== this.state");

    return (
      <div>
        {logged ? (
          <Redirect to={"/"} />
        ) : (
          <div className="container">
            <form className="white" onSubmit={e => this.onSubmit(e)}>
              <h5 className="grey-text text-darken-3">Register</h5>
              <div className="input-field">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={e => this.changeHandler(e)}
                />
              </div>

              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={e => this.changeHandler(e)}
                />
              </div>

              <div className="input-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={e => this.changeHandler(e)}
                />
              </div>

              <div className="input-field">
                <button type="submit" className="btn blue lighten-1 z-depth-0">
                  Register
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default Register;
