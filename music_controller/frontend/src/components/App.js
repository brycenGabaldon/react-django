import React, { Component } from "react";
import { render } from "react-dom";
import Homepage from "./Homepage";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Homepage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
