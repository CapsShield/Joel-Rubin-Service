import React from "react";
import GameReview from "./GameReview.jsx";

let photos = [
  "https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_c02435ac01bff1e3af6c69e9ddeb77f6bf40caf2.1920x1080.jpg?t=1525832559",
  "https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_8604088893b9d0ea42d41c741619e740e92fcee0.1920x1080.jpg?t=1525832559",
  "https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_fe2278241777765a73f5cc1567c17307d92ec6bb.1920x1080.jpg?t=1525832559",
  "https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_62a1e3085fee312cf6c1025ec89018fa98821d99.1920x1080.jpg?t=1525832559",
  "https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_1bf5f04ea4ffb1aaf3e77bef5e31793486f789ae.1920x1080.jpg?t=1525832559",
  "https://steamcdn-a.akamaihd.net/steam/apps/219890/ss_167e0de7713d2d1d8ee613ef078af986fb3212ef.1920x1080.jpg?t=1525832559",
];
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
  }

  componentDidMount() {
    setInterval(this.photoInterval.bind(this), 5000);
  }

  photoInterval() {
    let len = photos.length;
    this.setState({
      i: this.state.i + 1,
    });
    console.log(this.state.i);
    if (this.state.i === len) {
      this.setState({
        i: 0,
      });
    }
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
            <div className="mainImg">
              <img src={photos[this.state.i]} />
            </div>
            <div></div>
            <div className="carousel">
              <img
                className={this.state.i === 0 ? "marquee" : "normal"}
                src={photos[0]}
              />
              <img
                className={this.state.i === 1 ? "marquee" : "normal"}
                src={photos[1]}
              />
              <img
                className={this.state.i === 2 ? "marquee" : "normal"}
                src={photos[2]}
              />
              <img
                className={this.state.i === 3 ? "marquee" : "normal"}
                src={photos[3]}
              />
              <img
                className={this.state.i === 4 ? "marquee" : "normal"}
                src={photos[4]}
              />
              <img
                className={this.state.i === 5 ? "marquee" : "normal"}
                src={photos[5]}
              />
              <img
                className={this.state.i === 6 ? "marquee" : "normal"}
                src={photos[6]}
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
