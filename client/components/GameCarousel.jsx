import React from "react";
import GameReview from "./GameReview.jsx";
import Modal from "./Modal.jsx";
import styled, { keyframes } from "styled-components";

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
      <CarouselHeader>
        <div></div>
        <Genres>
          <span>All Games > Indie Games > {this.props.game.data.name}</span>
        </Genres>
        <GameTitle>
          <span>{this.props.game.data.name}</span>
          <CommunityButton>Community Hub</CommunityButton>
        </GameTitle>
        <div></div>
        <GameContainer>
          <GamePhotos>
            <div>
              <MainImage
                src={this.props.photos[this.state.i].photoUrl}
                onClick={this.bigClickHandler}
                data-i={this.state.i}
              />
            </div>
            <div></div>
            <Carousel id="photoCarousel">
              {this.props.photos.map((photo, idx) => (
                <TinyImage
                  src={photo.photoUrl}
                  status={this.state.i === idx ? "marquee" : "normal"}
                  data-i={idx}
                  onClick={this.clickHandler}
                  key={idx}
                  alt={photo.description}
                />
              ))}
            </Carousel>
          </GamePhotos>
          <div>
            <GameReview
              recentReviews={this.props.recentReviews.data}
              reviews={this.props.reviews.data}
              game={this.props.game}
              userTags={this.props.userTags}
            />
          </div>
          <FullScreen
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
          </FullScreen>
        </GameContainer>
      </CarouselHeader>
    );
  }
}

const CarouselHeader = styled.div`
  height: 100px;
  display: grid;
  grid-template-columns: 940px;
  grid-template-rows: 16px 27px 30px 16px;
`;

const Genres = styled.div`
  color: #8f98a0;
  font-size: 12px;
`;

const GameTitle = styled.div`
  font-size: 26px;
  display: flex;
  justify-content: space-between;
`;

const CommunityButton = styled.button`
  color: #67c1f5;
  background: rgba(103, 193, 245, 0.2);
  height: 30px;
  outline: none;
  border: none;
  border-radius: 2px;

  &: hover {
    color: white;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const GameContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 616px 324px;
  grid-template-rows: 444px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.2);
`;

const GamePhotos = styled.div`
  display: grid;
  grid-template-columns: 600px;
  grid-template-rows: 337px auto 65px auto 18px;
`;

const fade = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const MainImage = styled.img`
  width: 600px;
  height: 337px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  opacity: 1;
  animation: ${fade} ease-in 1s;
`;

const Carousel = styled.div`
  height: 85px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: block;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    width: 10px;
    margin-left: 5px;
  }

  &::-webkit-scrollbar-thumb {
    display: block;
    background-color: rgb(26, 39, 55);
    border-radius: 3px;
    cursor: pointer;
  }

  &::-webkit-scrollbar-thumb:hover {
    display: block;
    background-color: rgba(62, 126, 167, 0.8);
    border-radius: 3px;
    cursor: pointer;
    width: 10px;
  }

  &::-webkit-scrollbar-button:horizontal:decrement {
    width: 50px;
    background-color: rgb(26, 39, 55);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-button:horizontal:decrement:hover {
    background-color: rgba(62, 126, 167, 0.8);
  }

  // /* Right */
  // &::-webkit-scrollbar-button:horizontal:increment {
  //   width: 30px;
  //   background-color: rgb(26, 39, 55);
  // }

  // &::-webkit-scrollbar-button:horizontal:increment:hover {
  //   background-color: rgba(62, 126, 167, 0.8);
  // }

  &::-webkit-scrollbar-corner {
    display: none;
  }
`;

const FullScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const TinyImage = styled.img`
  size: cover;
  width: 112px;
  cursor: pointer;
  margin: 5px;
  box-shadow: ${(props) =>
    props.status === "marquee" ? "0 0 0 5px rgb(172, 170, 170);" : "none;"}

  transition: ${(props) =>
    props.status === "marquee" ? "0.2s ease;" : "none;"}
`;

export default GameCarousel;
