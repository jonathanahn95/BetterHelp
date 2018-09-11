import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  let preloadedState;
  if (window.currentUser) {
     preloadedState = {
       session: {
         id: window.currentUser.id
       },
        entities: {
          users: {
            [window.currentUser.id]: window.currentUser
          }
        }
     };
   } else {
     preloadedState = {};
   }
  delete(window.currentUser);

  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});
