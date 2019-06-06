import React, { Component } from "react";

export class GamesList extends Component {
  render() {
    const gamesList = (this.props.games || []).map((game, i) => {
      return (
        <div>
          <ul>
            <h6>-----GAME-----</h6>
            <li>{game.sport_key}</li>
            <li>{game.sport_nice}</li>
            <li>
              {game.teams[0]} vs {game.teams[1]}{" "}
            </li>
            <li>Starting time: {game.commence_time}</li>
            <h6>ODDS</h6>
            <li>site : {game.sites[3].site_nice}</li>
            <li>{game.sites[3].odds.h2h[0]}</li>
            <li>{game.sites[3].odds.h2h[1]}</li>
            <button>add</button>
          </ul>
        </div>
      );
    });
    return <ul>{gamesList}</ul>;
  }
}

export default GamesList;
