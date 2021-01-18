import React from "react";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Game from "./Game.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: 1,
    };
  }
  // componentDidMount() {
  //   axios.get(`/api/games/${this.state.photoId}/photo`).then((response) => {
  //     console.log(response);
  //   });
  // }

  render() {
    return (
      <div>
        <div className="header-container">
          <Header />
        </div>
        <div className="nav-container">
          <Nav />
        </div>
        <div className="game">
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
