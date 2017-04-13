// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { APP_NAME } from './config'
import Nav from './component/Nav'
import HomePage from './routes/HomePage/'
import TopicsPage from './routes/TopicsPage'
import NotFoundPage from './routes/NotFoundPage'
import {
  HOME_PAGE_ROUTE,
  TOPICS_PAGE_ROUTE,
} from './routes'

const App = () =>
  <div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route path={TOPICS_PAGE_ROUTE} render={() => <TopicsPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
