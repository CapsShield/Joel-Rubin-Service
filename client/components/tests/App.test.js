import React from "react";
import { expect } from "chai";
import { shallow } from "../../enzyme";

import App from "../App.jsx";
import GameCarousel from "../GameCarousel.jsx";
import GameReview from "../GameReview.jsx";

describe("<App />", () => {
  it("renders one <GameCarousel /> component", () => {
    const wrapper = shallow(<GameCarousel />);
    expect(wrapper.find(GameReview)).to.have.lengthOf(1);
  });

});
