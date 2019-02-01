import React, { Component } from "react";
import FriendsListView from "./views/FriendsListView";
import "./styles/App.scss";
import NavbarContainer from "./components/NavbarComponent/NavbarContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarContainer />
        <FriendsListView />
      </div>
    );
  }
}

export default App;
