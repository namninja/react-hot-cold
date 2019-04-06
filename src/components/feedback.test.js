import React from "react";
import { shallow } from "enzyme";

import Feedback from "./feedback";

describe("<Feedback />", () => {
  it("Renders without crashing", () => {
    shallow(<Feedback />);
  });
  it("Renders feedback", () => {
    let TEST_STATUS = "You are listening to a game!";

    let wrapper = shallow(<Feedback feedback={TEST_STATUS} />);
    expect(wrapper.contains(TEST_STATUS)).toEqual(true);
  });
});
