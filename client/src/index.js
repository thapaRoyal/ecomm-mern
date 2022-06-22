import React from 'react';
import './index.css';
import App from './App';
// import 'antd/dist/antd.css';
import rootReducer from './reducers';

import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import * as ReactDOMClient from 'react-dom/client';
const store = createStore(rootReducer, composeWithDevTools());

const rootElement = document.getElementById('root');

const root = ReactDOMClient.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
