import { shallow } from "enzyme";
import React from "react";
import MainPage from "../MainPage";
import * as hooks from "../../../../tools/hooks";

jest.spyOn(hooks, 'useUrlQuery').mockImplementation(() => ({}));

describe("<MainPage />", () => {
   test("Renders correctly", () => {
      expect(shallow(<MainPage />)).toMatchSnapshot();
   });
});
