import React, { Component } from "react";

export class GameDetails extends Component {
  state = {
    games: []
  };

  // componentDidMount() {
  //   this.getGames().then(list => this.setState({ games: list.data }));
  // }
  render() {
    const { games } = this.state;

    console.log(this.props.details, "from the game list");
    const GameDetails = (this.props.details || []).map((game, i) => {
      return (
        <div>
          <ul>
            <h6>-----GAME-----</h6>
            <li>{game.sport_key}</li>
            <li>{game.sport_nice}</li>
            <li>
              {game.teams[0]} vs {game.teams[1]}{" "}
            </li>
            <li>Starting time: {new Date(game.commence_time).toString()}</li>
            <h6>ODDS</h6>
            {game.sites[0] ? (
              <>
                <li>site : {game.sites[0].site_nice}</li>
                <li>{game.sites[0].odds.h2h[0]}</li>
                <li>{game.sites[0].odds.h2h[1]}</li>
              </>
            ) : (
              <h3>no odds</h3>
            )}

            <button>add</button>
          </ul>
        </div>
      );
    });
    return <ul>{GameDetails}</ul>;
  }
}

export default GameDetails;
