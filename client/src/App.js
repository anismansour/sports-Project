import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Switch, Route, withRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import GameDetails from "./components/gameList/GameDetail";
import Login from "./components/userAuth/Login";
import Register from "./components/userAuth/Register";
import UserProfile from "./components/userProfile/UserProfile";

//npm run dev to run server and react same time

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    };
  }

  doSetCurrentUser = user => {
    this.setState({ currentUser: user });
  };
  doLogout = () => {
    this.setState({
      currentUser: null
    });
  };
  render() {
    return (
      <div>
        <div>
          <NavBar doLogout={this.doLogout} user={this.state.currentUser} />
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Dashboard currentUser={this.state.currentUser} />}
          />
          <Route
            path="/login"
            render={() => (
              <Login
                currentUser={this.state.currentUser}
                doSetCurrentUser={this.doSetCurrentUser}
              />
            )}
          />
          <Route
            path="/register"
            render={() => (
              <Register
                currentUser={this.state.currentUser}
                doSetCurrentUser={this.doSetCurrentUser}
              />
            )}
          />
          <Route
            exact
            path="/user/:id"
            render={() => <UserProfile currentUser={this.state.currentUser} />}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
