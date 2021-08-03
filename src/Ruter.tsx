import React, { Suspense } from 'react'
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom'
import { AdminLayout } from './layout'
import { Login } from './views/Login'

export const Router: React.FC = () => {
  return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact={true}>
                    <Login />
                </Route>
                <Route path={'/admin'}>
                    <PrivateRouter>
                        <Admin />
                    </PrivateRouter>
                </Route>
            </Switch>
        </BrowserRouter>

  )
}

const Admin: React.FC = () => {
  return (
        <AdminLayout>
            <Suspense fallback={<>UwU</>}>
                <Switch>
                    <Route path="/">
                        <div>dashboard</div>
                    </Route>
                    <Route exact={true} path="/dates">
                        <div>dates</div>
                    </Route>
                </Switch>
            </Suspense>
        </AdminLayout>
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
