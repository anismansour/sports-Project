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
      console.log(gameParsed, "from getgames function");
      return gameParsed;
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  render() {
    const { games } = this.state;
    console.log(games, "from dashboard");
    return (
      <div>
        <button>Football</button>
        <button>Soccer</button>
        <button>Rugby</button>
        <button>Tennis</button>
        <button>Basketball</button>
        <GamesList games={games} />
      </div>
    );
  }
}

export default Dashboard;
