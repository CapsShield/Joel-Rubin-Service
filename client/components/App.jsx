import React from "react";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: 1,
    };
  }
  componentDidMount() {
    axios.get(`/api/games/${this.state.photoId}/photo`).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="nav">
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
