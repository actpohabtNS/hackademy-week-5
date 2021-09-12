import * as React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'

type Props = {
  redirectTo: string,
  RenderComponent: typeof React.Component, // Capitalized for React to recognize as a Component
  isAuth: boolean,
  [x:string]: any
}

class GuardedRoute extends React.Component<Props> {
  render() {
    const { redirectTo, RenderComponent, isAuth, ...rest } = this.props;

    return (
      <Route { ...rest } render={ props => (
        isAuth === true
          ? <RenderComponent { ...props } />
          : <Redirect to={ redirectTo } /> 
        )}
      />
    )
  }
}

export default GuardedRoute;