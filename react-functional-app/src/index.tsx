import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Landing from "./pages/Landing"
import LoginPage from "./pages/LoginPage"
import ForecastPage from './pages/ForecastPage'

import isAuthenticated from './authApi/auth'
import GuardedRoute from './components/GuardedRoute';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path="/">
          <Landing />
        </Route>

        <GuardedRoute
          path="/login"
          isAuth={ !isAuthenticated() }
          redirectTo="/forecast"
        >
          <LoginPage />
        </GuardedRoute>

        <GuardedRoute
          path="/forecast"
          isAuth={ isAuthenticated() }
          redirectTo="/login"
        >
          <ForecastPage />
        </GuardedRoute>

        <Route path="*">
          <Redirect to={{ pathname: "/" }} />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);