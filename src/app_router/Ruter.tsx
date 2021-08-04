import React from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { AdminRoutes } from './AdminRoutes'
import Login from '../views/Login'
export const Router: React.FC = () => {
  return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact={true}>
                    <Login />
                </Route>
                <Route path={'/admin'}>
                    <PrivateRouter>
                        <AdminRoutes />
                    </PrivateRouter>
                </Route>
            </Switch>
        </BrowserRouter>

  )
}

const PrivateRouter: React.FC = ({ children, ...rest }) => {
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
