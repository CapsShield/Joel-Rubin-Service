import React from "react";
import styled from "styled-components";

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  renderView() {
    if (this.props.bigImg !== null) {
      return (
        <Main>
          <ModalImg src={this.props.photos[this.props.bigImg].photoUrl} />
          <ModalFooter>
            <FooterButton
              onKeyDown={this.props.decrementer}
              onClick={this.props.decrementer}
            >
              Prev
            </FooterButton>
            <FooterSpan>
              {this.props.bigImg + 1} of {this.props.photos.length} screenshots
            </FooterSpan>
            <FooterButton
              onKeyDown={this.props.incrementer}
              onClick={this.props.incrementer}
            >
              Next
            </FooterButton>
          </ModalFooter>
        </Main>
      );
    } else {
      return <div>loading</div>;
    }
  }
  render() {
    return <div>{this.renderView()}</div>;
  }
}

const Main = styled.div`
  background-attachment: scroll;
  background-clip: border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(
    135deg,
    rgb(53, 100, 128) 5%,
    rgb(26, 48, 61) 95%
  );
  background-origin: padding-box;
  background-size: auto;
  border-radius: 3px;
  color: rgb(198, 212, 223);
  display: block;
  font-size: 12px;
  padding: 10px;
  position: absolute;
  z-index: 99;
  max-height: 730px;
  max-width: 1250px;
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const ModalImg = styled.img`
  border-bottom-color: rgb(198, 212, 223);
  border-bottom-style: none;
  border-bottom-width: 0px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(198, 212, 223);
  border-left-style: none;
  border-left-width: 0px;
  border-right-color: rgb(198, 212, 223);
  border-right-style: none;
  border-right-width: 0px;
  border-top-color: rgb(198, 212, 223);
  border-top-style: none;
  border-top-width: 0px;
  color: rgb(198, 212, 223);
  cursor: pointer;
  display: inline;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  height: 100%;
  margin: 0px;
  max-height: 807px;
  max-width: 1237px;
  opacity: 1;
  padding: 0px;
  width: 1000px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterButton = styled.button`
  color: #67c1f5;
  background: rgba(103, 193, 245, 0.2);
  height: 30px;
  outline: none;
  border: none;
  border-radius: 2px;
  margin: 5px;

  &: hover {
    color: white;
    background: linear-gradient(-60deg, #417a9b 5%, #67c1f5 95%);
  }
`;

const FooterSpan = styled.span`
  padding-top: 5px;
`;

export default Modal;
