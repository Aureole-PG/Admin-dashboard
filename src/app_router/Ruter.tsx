import React from 'react'
import { Switch, Route, BrowserRouter, Redirect, RouteProps } from 'react-router-dom'
import { AdminRoutes } from './AdminRoutes'
import Login from '../views/Login'

const PrivateRouter: React.FC<RouteProps> = ({ children, ...rest }) => {
  const isLoggedIn = true
  return (
        <Route
            {...rest}
            render={({ location }) =>
              isLoggedIn
                ? (children)
                : <Redirect
                        to={
                            {
                              pathname: '/',
                              state: { from: location }
                            }
                        }
                    />
            }
        />
  )
}

export const Router: React.FC = () => {
  return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact={true}>
                    <Login />
                </Route>
                <PrivateRouter path={'/admin'}>
                    <AdminRoutes />
                </PrivateRouter>
            </Switch>
        </BrowserRouter>

  )
}
