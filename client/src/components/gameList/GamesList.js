import React, { Component } from "react";

export class GamesList extends Component {
  state = {
    gameKey: ""
  };

  handleKey = e => {
    console.log(e.target.innerText);
    this.setState({ gameKey: e.target.innerText });
  };
  render() {
    const gamesList = (this.props.games || []).map((game, i) => {
      return (
        <div>
          <ul>
            <h6>-----Sport-----</h6>

            <li
              onClick={() => {
                this.props.getDetails(game.key);
              }}
            >
              {game.details}
            </li>
          </ul>
        </div>
      );
    });
    return <ul>{gamesList}</ul>;
  }
}

export default GamesList;
