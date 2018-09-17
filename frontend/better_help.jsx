import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { requestSelectedBusinessCategories } from './actions/business_category_actions';
import { requestSingleBusiness } from './actions/businesses_actions'

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

  const store = configureStore(preloadedState);
  window.dispatch = store.dispatch;
  window.requestSingleBusiness = requestSingleBusiness;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root)
});
