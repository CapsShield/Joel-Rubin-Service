import React from "react";
import GameReview from "./GameReview.jsx";

class Game extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="carousel-header">
        <div></div>
        <div className="genres">
          <span>All Games > Indie Games > {this.props.game.data.name}</span>
        </div>
        <div className="game-title">
          <span>{this.props.game.data.name}</span>
          <button>Community Hub</button>
        </div>
        <div></div>
        <div className="game-container">
          <div className="game-photos">
            <div className="mainImg"></div>
            <div></div>
            <div className="carousel">
              <img src="https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_8604088893b9d0ea42d41c741619e740e92fcee0.1920x1080.jpg?t=1525832559" />
              <img src="https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_fe2278241777765a73f5cc1567c17307d92ec6bb.1920x1080.jpg?t=1525832559" />
              <img src="https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_62a1e3085fee312cf6c1025ec89018fa98821d99.1920x1080.jpg?t=1525832559" />
              <img src="https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_1bf5f04ea4ffb1aaf3e77bef5e31793486f789ae.1920x1080.jpg?t=1525832559" />
              <img
                src="https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_aa83543c053ccc413d8b7b5389bffb845ae84068.1920x1080.jpg?t=1525832559
"
              />
              <img
                src="https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_167e0de7713d2d1d8ee613ef078af986fb3212ef.1920x1080.jpg?t=1525832559
"
              />
            </div>
          </div>

          <div className="game-rev-container">
            <GameReview game={this.props.game} />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
