import React from "react";
import Clock from "./Clock";
import { shallow } from "enzyme";
const constantDate = new Date("December 17, 1995 03:04:00");
describe("Clock component", () => {
    beforeAll(() => {
        global.Date = class extends Date {
            constructor() {
                super(constantDate.getTime());
            }
        };
    });
    test("should render", () => {
        const wrapper = shallow(<Clock />);
        expect(wrapper.find("h1")).toBeTruthy();
        // expect(wrapper.find("h1")).toExist();
    });
    test("should render with proper text", () => {
        const wrapper = shallow(<Clock />);
        expect(
            wrapper
                .find("ClockText")
                .children()
                .text(),
        ).toEqual("03:04");
    });
});
