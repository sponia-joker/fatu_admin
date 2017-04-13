import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  TOPICS_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from '../../routes'

const Nav = () =>
  <nav>
    <ul>
      {[
        { route: HOME_PAGE_ROUTE, label: 'Home' },
        { route: TOPICS_PAGE_ROUTE, label: 'topcis page' },
        { route: NOT_FOUND_PAGE_ROUTE, label: '404 Demo' },
      ].map(link => (
        <li key={link.route}>
          <NavLink to={link.route} exact>{link.label}</NavLink>
        </li>
      ))}
    </ul>
  </nav>

export default Nav