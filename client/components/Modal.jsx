import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: null,
      bigImg: null,
    };
    this.incrementer = this.incrementer.bind(this);
    this.decrementer = this.decrementer.bind(this);
  }

  componentDidMount() {
    this.setState({
      photos: this.props.photos,
    });
  }

  incrementer() {
    if (!this.state.bigImg) {
      let nextNum = this.props.bigImg + 1;
      if (nextNum === this.props.photos.length) {
        nextNum = 0;
      }
      this.setState({
        bigImg: nextNum,
      });
    } else if (this.state.bigImg) {
      let nextNum = this.state.bigImg + 1;
      if (nextNum === this.props.photos.length) {
        nextNum = 0;
      }
      this.setState({
        bigImg: nextNum,
      });
    }
  }

  decrementer() {
    if (!this.state.bigImg) {
      let nextNum = this.props.bigImg - 1;
      if (nextNum < 0) {
        nextNum = this.props.photos.length - 1;
      }
      this.setState({
        bigImg: nextNum,
      });
    } else if (this.state.bigImg) {
      let nextNum = this.state.bigImg - 1;
      if (nextNum < 0) {
        nextNum = this.props.photos.length - 1;
      }
      this.setState({
        bigImg: nextNum,
      });
    }
  }

  renderView() {
    if (this.props.bigImg) {
      return (
        <div className="modal">
          <img
            src={
              this.state.bigImg
                ? this.props.photos[this.state.bigImg].photoUrl
                : this.props.photos[this.props.bigImg].photoUrl
            }
          />
          <div className="modal-footer">
            <button onClick={this.decrementer}>previous</button>
            <button onClick={this.incrementer}>next</button>
          </div>
        </div>
      );
    } else {
      return <div>loading</div>;
    }
  }
  render() {
    return <div>{this.renderView()}</div>;
  }
}

export default Modal;
