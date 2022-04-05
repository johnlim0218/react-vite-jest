import * as React from 'react';
import { render } from "@testing-library/react";
import Account from "./Account";

it ("matches snapshot", () => {
  const utils = render(<Account id="gwanwoo.john" password="1234" />)
  expect(utils.container).toMatchSnapshot()
})

it ("shows the props correctly", () => {
  const utils = render(<Account id="gwanwoo.john" password="1234" />)
  utils.getByText("gwanwoo.john")
  utils.getByText("1234")
})