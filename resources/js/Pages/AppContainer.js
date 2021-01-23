

import React from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from "../redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage';
require('../bootstrap');

const app = document.getElementById('root')

function initializeStore() {
  let store = configureStore();
  return store;
}


ReactDOM.render(
  <Provider store={initializeStore()}>
     <Router>
      <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
    </Router>
  </Provider>, 
  app
);

