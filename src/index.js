import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route,NavLink, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App'
import Users from './Components/Users'
import Contact from './Components/Contact'
import Notfound from './Components/notfound'

const routing = (
    <Router>
      <div>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/users" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )

ReactDOM.render(<App/>, document.getElementById('root'))