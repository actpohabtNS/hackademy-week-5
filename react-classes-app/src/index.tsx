import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Landing from "./pages/Landing"
import GuardedRoute from './components/GuardedRoute';
import LoginPage from "./pages/LoginPage"
import ForecastPage from './pages/ForecastPage'

import isAuthenticated from './authApi/auth'

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
          RenderComponent={ LoginPage }
          redirectTo="/forecast"
        />

        <GuardedRoute
          path="/forecast"
          isAuth={ isAuthenticated() }
          RenderComponent={ ForecastPage }
          redirectTo="/login"
        />

        <Route path="*">
          <Redirect to={{ pathname: "/" }} />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);