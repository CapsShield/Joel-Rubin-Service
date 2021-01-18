import React from "react";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Game from "./Game.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: 105,
      game: null,
      loaded: false,
    };
  }
  componentDidMount() {
    // axios.get(`/api/games/${this.state.photoId}/photo`).then((response) => {
    //   console.log(response);
    // });
    axios.get(`api/games/${this.state.photoId}/game`).then((response) => {
      this.setState({
        game: response,
        loaded: true,
      });
    });
  }

  renderView() {
    if (this.state.loaded) {
      return (
        <div>
          <div className="header-container">
            <Header />
          </div>
          <div className="nav-container">
            <Nav />
          </div>
          <div className="game">
            <Game game={this.state.game} />
          </div>
        </div>
      );
    } else {
      return <div>Loading</div>;
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}

export default App;
