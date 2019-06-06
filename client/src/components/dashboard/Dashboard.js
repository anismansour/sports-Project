import React, { Component } from "react";
import GamesList from "../gameList/GamesList";

export class Dashboard extends Component {
  state = {
    games: []
  };

  componentDidMount() {
    this.getGames().then(list => this.setState({ games: list.data }));
  }
  getGames = async () => {
    try {
      const response = await fetch("/api/games");
      const gameParsed = await response.json();
      return gameParsed;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  render() {
    const { games } = this.state;
    return (
      <div>
        <GamesList games={games} />
      </div>
    );
  }
}

export default Dashboard;
