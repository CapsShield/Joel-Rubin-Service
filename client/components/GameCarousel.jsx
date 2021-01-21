import React from "react";
import GameReview from "./GameReview.jsx";
import Modal from "./Modal.jsx";

class GameCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      i: 0,
      bigImg: null,
      clicked: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.photoInterval = this.photoInterval.bind(this);
    this.autoScroll = this.autoScroll.bind(this);
    this.bigClickHandler = this.bigClickHandler.bind(this);
    this.clickSet = this.clickSet.bind(this);
    // this.closeClicker = this.closeClicker.bind(this);
  }

  componentDidMount() {
    // this.closeClicker();
    this.setState(
      {
        photos: this.props.photos,
      },
      () => {
        setInterval(this.photoInterval, 5000);
      }
    );
  }

  photoInterval() {
    let len = this.props.photos.length;
    this.setState({
      i: this.state.i + 1,
    });
    this.autoScroll();
    if (this.state.i === len - 1) {
      this.setState({
        i: 0,
      });
      this.autoScroll();
    }
  }

  autoScroll() {
    let elem = document.getElementById("photoCarousel");
    if (this.state.i === 5) {
      elem.scrollBy({
        top: 0,
        left: 1000,
        behavior: "smooth",
      });
    }
    if (this.state.i === 0) {
      elem.scrollBy({
        top: 0,
        left: -1000,
        behavior: "smooth",
      });
    }
  }

  clickHandler(e) {
    let value = e.target.attributes["data-i"].value;
    this.setState({
      i: Number(value),
    });
    e.preventDefault();
  }

  bigClickHandler(e) {
    let value = e.target.attributes["data-i"].value;
    this.setState({
      bigImg: Number(value),
      clicked: true,
    });
    e.preventDefault();
  }

  clickSet(e) {
    e.preventDefault();
    let body = document.getElementById("full-screen");
    if (e.target === body) {
      this.setState({
        clicked: false,
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
              <img
                src={this.props.photos[this.state.i].photoUrl}
                onClick={this.bigClickHandler}
                data-i={this.state.i}
              />
            </div>
            <div></div>
            <div className="carousel" id="photoCarousel">
              {this.props.photos.map((photo, idx) => (
                <img
                  src={photo.photoUrl}
                  className={this.state.i === idx ? "marquee" : "normal"}
                  data-i={idx}
                  onClick={this.clickHandler}
                  key={idx}
                  alt={photo.description}
                />
              ))}
            </div>
          </div>
          <div className="game-rev-container">
            <GameReview
              recentReviews={this.props.recentReviews.data}
              reviews={this.props.reviews.data}
              game={this.props.game}
            />
          </div>
          <div
            id="full-screen"
            onClick={this.clickSet}
            style={
              this.state.clicked ? { display: "block" } : { display: "none" }
            }
          >
            <div
              className="modal-container"
              style={
                this.state.clicked ? { display: "block" } : { display: "none" }
              }
            >
              <Modal
                clicked={this.state.clicked}
                clickSet={this.clickSet}
                bigImg={this.state.bigImg}
                photos={this.props.photos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GameCarousel;
