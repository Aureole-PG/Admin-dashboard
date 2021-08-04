import React, { Suspense } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import AdminLayout from '../layout'
import { adminPaths } from './path'
export const AdminRoutes: React.FC = () => {
  const { url } = useRouteMatch()
  return (
    <AdminLayout url={url}>
      <Suspense fallback={<>UwU</>}>
        <Switch>
          {
            adminPaths.map((route, id) => (
              <Route exact={route.exact} key={id} path={`${url}/${route.path}`} >
                <route.component/>
              </Route>
            ))
          }
        </Switch>
      </Suspense>
    </AdminLayout>
  )
}
