import React from "react";

import { mount } from "enzyme";

import A from "./A";

describe("JEST", () => {
  it("Воспроизводит ошибку", () => {
    const z = <A />;
    const wrapper = mount(z);
  });
});
