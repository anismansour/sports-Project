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

  render() {
    const { games } = this.state;

    return (
      <div>
        <div class="parallax-container">
          <div class="parallax">
            <img src="https://www.thinkwy.org/wp-content/uploads/2017/10/hpfulq-1234.jpg" />
          </div>
        </div>
        <div className="game-container">
          <GamesList games={games} getDetails={this.getGameDetails} />
          {this.state.toggle && (
            <GameDetails
              currentUser={this.props.currentUser}
              details={this.state.gameDetails}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
