import React, { Component } from "react";

export class UserProfile extends Component {
  state = {
    user: {},
    data: {}
  };

  //   componentDidMount() {
  //     this.doGetUser().then(({ user }) => this.setState({ user }));
  //   }

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
    return (
      <div>
        <h1>this is </h1>
        <h1>{this.state.user.email}</h1>
        <h1>{this.state.user.password}</h1>
      </div>
    );
  }
}

export default UserProfile;
