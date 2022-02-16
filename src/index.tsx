import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
import { CookiesProvider } from 'react-cookie';

import './index.scss';
import App from './App';
import store from './redux/modules';

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);