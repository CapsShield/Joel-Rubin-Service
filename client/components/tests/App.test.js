import React from "react";
import { expect } from "chai";
import sinon from 'sinon'
import App from "../App.jsx";
import GameCarousel from "../GameCarousel.jsx";
import GameReview from "../GameReview.jsx";
import Nav from "../Nav.jsx";
import Modal from "../Modal.jsx"
import styled from "styled-components";
import { gameSeed, photos, recentReviews, reviews, userTags } from '../utils.js'
import 'jest-styled-components';
import Enzyme, { configure, shallow, mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

/*
App Tests:
1) need to test that information is received from API calls
2) check that info is then used to set State of App component
*/
describe("<GameCarousel />", () => {
  it('maps correct # of photos to the carousel', () => {
    let props = {
      photos: photos,
      game: gameSeed,
      reviews: reviews,
      userTags: userTags,
      recentReviews: recentReviews
    }
    let wrapper = shallow(<GameCarousel {...props} />);
    let length = props.photos.length
    expect(wrapper.find(".tiny")).to.have.lengthOf(length)
  })
  it()
});

/*

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

// describe("<Nav />", () => {
//   it('renders children when passed in', () => {
//     const wrapper = shallow((
//       <Nav>
//         <I className="fas fa-caret-down"></I>
//       </Nav>
//     ));
//     expect(wrapper.contains(<I className="fas fa-caret-down"></I>)).to.equal(true);
//   })

// });



// this test currently just checks for the presence of a div on the page