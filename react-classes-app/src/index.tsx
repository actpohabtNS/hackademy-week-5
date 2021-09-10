import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import App from './App';
import Landing from "./pages/Landing"
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

        <Route path="/login">
          
          {
            isAuthenticated()
            ? <Redirect to={{ pathname: "/forecast" }} />
            : <LoginPage />
          }

        </Route>

        <Route path="/forecast">
          
          {
            isAuthenticated()
            ? <ForecastPage />
            : <Redirect to={{ pathname: "/login" }} />
          }

        </Route>

        <Route path="*">
          <Redirect to={{ pathname: "/" }} />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);