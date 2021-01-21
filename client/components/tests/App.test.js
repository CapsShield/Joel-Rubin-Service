import React from "react";
import { expect } from "chai";
import { shallow } from "../../enzyme";

import App from "../App.jsx";
import GameCarousel from "../GameCarousel.jsx";
import GameReview from "../GameReview.jsx";
import Nav from "../Nav.jsx";
import Modal from "../Modal.jsx"

describe("<Nav />", () => {
  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Nav>
        <i className="fas fa-caret-down"></i>
      </Nav>
    ));
    expect(wrapper.contains(<i className="fas fa-caret-down"></i>)).to.equal(true);
  });


});
