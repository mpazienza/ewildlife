import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getParameter } from './utils/getParameter';
import cssVars from 'css-vars-ponyfill';

import rootReducer from './reducers';
import { startListeningToAuth, manualAuth } from './actions/auth';
import { loadSiteConfig } from './actions/config';

import requireAuth from "./components/auth";
import IndexView from './views/index';
import LoginView from './views/login';
import LogoutView from './views/logout';
import AccountView from './views/account';
import SavedView from './views/saved';
import WorkflowView from './views/workflow';
import ResultsView from './views/results';
import LoadView from './views/load';

// Polyfill
cssVars();

// Prevent Select All, Copy, and Cut
document.addEventListener("contextmenu", () => {
  return false;
} );

document.addEventListener( "keydown", (evt) => {
  if (evt.ctrlKey || evt.metaKey) {
    if (evt.keyCode === 65 || evt.keyCode === 67 || evt.keyCode === 88) {
      evt.preventDefault();
      return false;
    }
  } 
} );

// Create the data store
const store = createStore(rootReducer, applyMiddleware(thunk));
const user = getParameter('user'); // Is a user passed?
const embed = getParameter('embed') == 'true'; // Treat as an embed

// Get the current domain
const host = window.location.hostname;
let   site = getParameter('site') || 'rex'; // Make REX the default site

// Set the site based on the current domain
if (host.match(/skylightip\.com/g)) {
  site = host.split('.')[0];
}

if (host.match(/ipscio\.com/g)) {
  site = 'simple-semantic-search';
}

store.dispatch( loadSiteConfig(site, embed) );


var unsubscribe = store.subscribe( () => {
  var s = store.getState();

  // Make sure config is loaded before enabling user
  if (s.siteName !== '') {
    unsubscribe();

    store.dispatch( startListeningToAuth() );

    if (user && s.config.allowUserParam) {
      var referrers = s.config.restrictReferrers.split(',') || []

      // If the params is restricted to domains, then lets verify
      if (referrers && referrers.length) {
        var docRef = document.referrer;
        var valid = false;

        for (var i = 0; i < referrers.length; i++) {
          if (docRef.includes(referrers[i].trim())) {
            valid = true;
            store.dispatch( manualAuth(user) );
            break;
          }
        }

 
      } else {
        store.dispatch( manualAuth(user) );
      }

    }
  }
})


// Start up the application
render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={requireAuth(IndexView)} />
        <Route exact path='/login' component={LoginView} />
        <Route exact path='/logout' component={requireAuth(LogoutView)} />
        <Route exact path='/account' component={requireAuth(AccountView)} />
        <Route exact path='/saved' component={requireAuth(SavedView)} />
        <Route exact path='/:workflow' component={requireAuth(WorkflowView)} />
        <Route exact path='/:workflow/results' component={requireAuth(ResultsView)} />
        <Route exact path='/:workflow/load' component={requireAuth(LoadView)} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
