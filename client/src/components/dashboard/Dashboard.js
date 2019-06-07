import React, { Component } from "react";
import GamesList from "../gameList/GamesList";
import GameDetails from "../gameList/GameDetail";

export class Dashboard extends Component {
  state = {
    games: [],
    gameDetails: [],
    toggle: false
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

  getGameDetails = async sport => {
    try {
      const response = await fetch(`/api/games/details/${sport}`);
      const gameParsed = await response.json();
      console.log(gameParsed, "from getgames function");
      this.setState({
        gameDetails: gameParsed.data,
        toggle: true
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  // toggleHandler = () => {
  //   this.setState({
  //     toggle: true
  //   });
  // };

  render() {
    const { games } = this.state;
    console.log(games, "from dashboard");
    return (
      <div className="game-container">
        <GamesList games={games} getDetails={this.getGameDetails} />
        {this.state.toggle && <GameDetails details={this.state.gameDetails} />}
      </div>
    );
  }
}

export default Dashboard;