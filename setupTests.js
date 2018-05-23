import "jest-enzyme";
import { JSDOM } from "jsdom";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

if (!global.Intl) {
  require("intl");
}
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};

const dom = new JSDOM("<!DOCTYPE html><html><head></head><body></body></html>");

global.window = dom.window;
global.document = dom.window.document;
global.navigator = {
  userAgent: "node.js"
};
configure({ adapter: new Adapter() });
