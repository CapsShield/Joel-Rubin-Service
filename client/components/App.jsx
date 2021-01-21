import React from "react";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import GameCarousel from "./GameCarousel.jsx";
import axios from "axios";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: 105,
      game: null,
      loaded: false,
      photos: null,
      reviews: null,
    };
  }
  componentDidMount() {
    axios.get(`/api/games/${this.state.photoId}/photo`).then((response) => {
      this.setState({
        photos: response.data,
      });
    });
    axios.get(`api/games/${this.state.photoId}/game`).then((response) => {
      this.setState({
        game: response,
        loaded: true,
      });
    });
    axios.get(`/api/games/${this.state.photoId}/reviews`).then((result) => {
      console.log(result);
      this.setState({
        reviews: result,
      });
    });
  }

  renderView() {
    if (
      this.state.loaded &&
      this.state.game &&
      this.state.photos &&
      this.state.reviews
    ) {
      return (
        <div>
          <GlobalStyle />
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <NavContainer>
            <Nav />
          </NavContainer>
          <GameContainer>
            <GameCarousel
              reviews={this.state.reviews}
              photos={this.state.photos}
              game={this.state.game}
            />
          </GameContainer>
        </div>
      );
    } else {
      return;
      <Loading>Loading</Loading>;
    }
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}

const GlobalStyle = createGlobalStyle`
body {
  font-family: Arial, sans-serif;
  background-color: rgb(27, 40, 56);
  color: #dbe2e6;
  background-image: url('https://steamcdn-a.akamaihd.net/steam/apps/219890/page_bg_generated_v6b.jpg?t=1525832559');
  background-position-x: 50%;
  background-position-y: -20%;
  background-repeat: no-repeat;
}`;

const Loading = styled.div`
  background-color: black;
  color: white;
  font-family: helvetica;
  font-size: 100px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #171a21;
  height: 98px;
  z-index: 20;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.75);
`;

const NavContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-rows: 22px 35px;
  width: 100%;
`;

const GameContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
export default App;
