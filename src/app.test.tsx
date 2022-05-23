import * as React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app';
import { createMemoryHistory } from 'history';
import { HashRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';

describe('<App />', () => {
  it('renders component correctly', () => {
    const history = createMemoryHistory();
    history.push('/login');

    render(
      <Provider store={store}>
        <Router location={history.location} navigator={history}>
          <App />
        </Router>
      </Provider>
    );

    const loginTitle = screen.getByText('로그인');
    expect(loginTitle).toBeInTheDocument();

    // const { container } = render(<App />);
    // expect(container.getElementsByTagName('div')).toHaveLength(1);
    // expect(container.getElementsByTagName('div')[0]).toHaveTextContent('테스트');

    // expect(container).toMatchSnapshot();
  });
});
