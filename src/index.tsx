import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import store from './store/configureStore';
import '@assets/scss/index.scss';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement!);
root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
