// @flow

import {
  HOME_PAGE_ROUTE,
  TOPICS_PAGE_ROUTE,
} from '../shared/routes'

import renderApp from './renderApp'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url))
  })

  app.get(TOPICS_PAGE_ROUTE, (req, res) => {
     res.send(renderApp(req.url))
  })
  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
