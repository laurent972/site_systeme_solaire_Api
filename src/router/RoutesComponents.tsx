import React from 'react'
import { BrowserRouter as Router, Route, RouteComponentProps, Switch } from 'react-router-dom'

import Layout from '../layouts/Layout'
import { RouteType } from '../types/routes'

import { publicLayoutRoutes } from './routes'


const childRoutes = (Layout: React.ElementType, routes: Array<RouteType>) =>
  routes.map(({ component: Component, guard, children, path }, index: number) => {
    let Guard = guard || React.Fragment

    return children ? (
      children.map((element, index: number) => {
        Guard = element.guard || Guard
        const ElementComponent = element.component || React.Fragment

        return (
          <Route
            key={index}
            path={element.path}
            exact
            render={(props: RouteComponentProps) => (
              <Layout>
                <Guard>
                  <ElementComponent {...props} />
                </Guard>
              </Layout>
            )}
          />
        )
      })
    ) : Component ? (
      <Route
        key={index}
        path={path}
        exact
        render={(props) => (
          <Layout>
            <Guard>
              <Component {...props} />
            </Guard>
          </Layout>
        )}
      />
    ) : null
  })

const RoutesComponents = () => (
  <Router>
    <Switch>
      {childRoutes(Layout, publicLayoutRoutes)}
  
      </Switch>
  </Router>
)

export default RoutesComponents
