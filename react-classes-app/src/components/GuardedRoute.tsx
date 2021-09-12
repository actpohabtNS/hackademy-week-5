import * as React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

type Props = {
  redirectTo: string,
  children: JSX.Element | JSX.Element[], // Capitalized for React to recognize as a Component
  isAuth: boolean,
  [x:string]: any
}

class GuardedRoute extends React.Component<Props> {
  render() {
    const { redirectTo, children, isAuth, ...rest } = this.props;

    return (
      <Route { ...rest } >
        {isAuth === true
          ? children
          : <Redirect to={ redirectTo } /> }
      </Route>
    )
  }
}

export default GuardedRoute;