import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Account from './Account';

it('matches snapshot', () => {
  const utils = render(<Account id="gwanwoo.john" password="1234" />);
  expect(utils.container).toMatchSnapshot();
});

it('shows the props correctly', () => {
  render(<Account id="gwanwoo.john" password="1234" />);
  screen.getByText('gwanwoo.john');
  screen.getByText('1234');
});
