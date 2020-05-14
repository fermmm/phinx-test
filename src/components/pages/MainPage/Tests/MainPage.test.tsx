import { shallow } from "enzyme";
import React from "react";
import { MainPage } from "../MainPage";

describe("<MainPage />", () => {
   test("Renders correctly", () => {
      expect(shallow(<MainPage />)).toMatchSnapshot();
   });
});
