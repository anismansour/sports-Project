import React, { Component } from "react";
import M from "materialize-css";
import { Collapsible, CollapsibleItem } from "react-materialize";

export class GameDetails extends Component {
  state = {
    games: []
  };
  componentDidMount() {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems);
    });
  }
  AddGameToUser = async obj => {
    const { currentUser } = this.props;

    const addGame = await fetch(`/api/games/${currentUser._id}`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const parsedResponse = await addGame.json();
    console.log(parsedResponse);
  };
  render() {
    const { games } = this.state;

    console.log(this.props.details, "from the game list");
    const GameDetails = (this.props.details || []).map((game, i) => {
      return (
        <div>
          <ul>
            <h6>-----GAME-----</h6>

            <Collapsible popout>
              <CollapsibleItem
                header={game.teams[0] + " vs " + game.teams[1]}
                icon="whatshot"
              >
                {game.teams[0]} vs {game.teams[1]}
                <li>{game.sport_nice}</li>
                <li>
                  {game.teams[0]} vs {game.teams[1]}{" "}
                </li>
                <li>
                  Starting time:{" "}
                  {new Date(game.commence_time * 1000).toString()}
                </li>
                <h6>ODDS</h6>
                {game.sites[0] ? (
                  <>
                    <li>site : {game.sites[0].site_nice}</li>
                    <li>{game.sites[0].odds.h2h[0]}</li>
                    <li>{game.sites[0].odds.h2h[1]}</li>
                  </>
                ) : (
                  <h6>odds not available </h6>
                )}
                <button
                  className="btn waves-effect waves-light  "
                  type="submit"
                  name="action"
                  onClick={() => this.AddGameToUser(game)}
                >
                  add
                </button>
              </CollapsibleItem>
            </Collapsible>
          </ul>
        </div>
      );
    });
    return <ul>{GameDetails}</ul>;
  }
}

export default GameDetails;
