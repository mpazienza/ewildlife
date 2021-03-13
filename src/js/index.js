import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { checkAuth } from './actions/auth';

// Reducers
import rootReducer from './reducers';

// Container
import AppContainer from './containers/index';

// Views
import HomeView from './views/home';
import SignInView from './views/sign-in';
import SignOutView from './views/sign-out';
import SignUpView from './views/sign-up';
import IntakeView from './views/intake';
import ReportsView from './views/reports';

import SettingsView from './views/settings';

import NotFoundView from './views/sign-out';

// Components
import RequireAuth from './components/auth';


// Create the data store
const store = createStore(rootReducer, applyMiddleware(thunk));

// Check for Authentication
store.dispatch( checkAuth() );

// Start up the application
render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route render={({ location }) => (
          <AppContainer>
            <Switch location={ location }>
              <Route exact path='/' component={ HomeView } />
              <Route exact path='/sign-in' component={ SignInView } />
              <Route exact path='/sign-out' component={ SignOutView } />
              <Route exact path='/sign-up' component={ SignUpView } />
              <Route exact path='/intake' component={ RequireAuth( IntakeView ) } />
              <Route exact path='/reports' component={ RequireAuth( ReportsView ) } />
              <Route exact path='/settings' component={ RequireAuth( SettingsView ) } />

              <Route component={ NotFoundView } />
            </Switch>
          </AppContainer>
        ) } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
