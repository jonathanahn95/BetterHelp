import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { HashRouter } from 'react-router-dom';

const Root = ({ store }) => (
  <div>
    <Provider store={ store }>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  </div>
);

export default Root;
