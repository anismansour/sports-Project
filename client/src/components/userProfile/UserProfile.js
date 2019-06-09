import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import M from "materialize-css";
import { Collapsible, CollapsibleItem } from "react-materialize";

class UserProfile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    this.doGetUser().then(({ user }) => this.setState({ user }));
  }

  doGetUser = async () => {
    try {
      const user = await fetch(`/api/users/${this.props.match.params.id}`);
      const parsedUser = await user.json();

      return parsedUser;
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { games } = this.state.user;
    const { user } = this.state;

    return (
      <div>
        <h1>{user.name}</h1>
        {games &&
          games.map((game, i) => (
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
                </CollapsibleItem>
              </Collapsible>
            </ul>
          ))}
      </div>
    );
  }
}

export default withRouter(UserProfile);
