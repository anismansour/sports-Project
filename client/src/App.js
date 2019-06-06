import React from "react";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import { Switch, Route, withRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import GameDetails from "./components/gameList/GameDetail";
import Login from "./components/userAuth/Login";
import Register from "./components/userAuth/Register";

//npm run dev to run server and react same time

function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Switch>
        <Route exact path="/" render={() => <Dashboard />} />
        <Route path="/game/:id" render={() => <GameDetails />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <Register />} />
      </Switch>
    </div>
  );
}

export default App;
