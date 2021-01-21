import React from "react";
import { expect } from "chai";
import { shallow, mount } from "../../enzyme";
import sinon from 'sinon'
import App from "../App.jsx";
import GameCarousel from "../GameCarousel.jsx";
import GameReview from "../GameReview.jsx";
import Nav from "../Nav.jsx";
import Modal from "../Modal.jsx"



/*
App Tests:
1) need to test that information is received from API calls
2) check that info is then used to set State of App component

Game Carousel:
1) Need to test that clickHandler accurately grabs value and sets State
2) Test that auto scroll functionality moves to desired location
3) Need to test that all photos present in props are mapped out to carousel

Game Review:
1) Test that reviews are fetched and mapped
2) Test that tags are fetched and mapped

Header:
1) Check for presence of buttons and divs

Modal:
1) Check that incrementer goes to the end of array of photos
2) Check that incrementer starts back at 0 when it reaches the end
3) Check that decrementer goes to beginning of array
4) Check that decrementer goes to the end of array when it reaches the beginning

Nav:
1) Check for presence of divs and buttons

*/

describe("<Nav />", () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Nav>
        <i className="fas fa-caret-down"></i>
      </Nav>
    ));
    expect(wrapper.contains(<i className="fas fa-caret-down"></i>)).to.equal(true);
  })
})


// this test currently just checks for the presence of a div on the page