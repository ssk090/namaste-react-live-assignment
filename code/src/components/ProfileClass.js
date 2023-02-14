import React, { Component } from "react";

export class ProfileClass extends Component {
  constructor(props) {
    super(props);
    //Create State
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ssk090");
    const json = await data.json();
    this.setState({ userInfo: json });
  }
  render() {
    return (
      <div
        className="border border-red-400 mx-2 my-2"
        style={{ marginBottom: "75px" }}
      >
        <div className="text-2xl font-bold">Profile Class Component</div>
        <img src={this.state.userInfo.avatar_url} />
        <div className="text-xl">Name : {this.state.userInfo.name}</div>
        <div className="text-xl">Location : {this.state.userInfo.location}</div>
      </div>
    );
  }
}

export default ProfileClass;
