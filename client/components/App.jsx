import React from 'react';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import GameCarousel from './GameCarousel.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null,
      photos: null,
      reviews: null,
      recentReviews: null,
      userTags: null,
    };
  }
  componentDidMount() {
    let gameId = this.props.gameId || 1;
    if (gameId > 100 || gameId < 0) {
      gameId = 1;
    }

    axios.get(`/api/games/${gameId}/photo`).then((response) => {
      this.setState({
        photos: response.data,
      });
    });
    axios.get(`api/games/${gameId}/game`).then((response) => {
      this.setState({
        game: response.data,
      });
    });
    axios.get(`/api/games/${gameId}/reviews`).then((result) => {
      this.setState({
        reviews: result,
      });
    });
    axios.get(`/api/games/${gameId}/recentReviews`).then((result) => {
      this.setState({
        recentReviews: result,
      });
    });
    axios.get(`/api/games/${gameId}/userTags`).then((result) => {
      this.setState({
        userTags: result.data,
      });
    });
  }

  renderView() {
    if (
      this.state.game &&
      this.state.photos &&
      this.state.reviews &&
      this.state.recentReviews &&
      this.state.userTags
    ) {
      return (
        <div>
          <OuterDiv id='outerDiv'>
            <GlobalStyle />
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <NavContainer>
              <Nav />
            </NavContainer>
            <GameContainer>
              <GameCarousel
                recentReviews={this.state.recentReviews}
                reviews={this.state.reviews}
                photos={this.state.photos}
                game={this.state.game}
                userTags={this.state.userTags}
              />
            </GameContainer>
          </OuterDiv>
          <Footer />
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
  overflow-x: hidden;
  font-family: Arial, sans-serif;
  background-color: rgb(27, 40, 56);
  color: #dbe2e6;
  background-image: url('https://steamcdn-a.akamaihd.net/steam/apps/219890/page_bg_generated_v6b.jpg?t=1525832559');
  background-position-x: 50%;
  background-position-y: 100px;
  background-repeat: no-repeat;
  position: relative;
  margin: 0;
  min-height: 100vh;
}`;

const OuterDiv = styled.div`
  height: 695px;
`;
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
