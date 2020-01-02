import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import HomeView from './components/views/HomeView'
import UsersView from './components/views/UsersView'
import LoginView from './components/views/LoginView'
import UserView from './components/views/UserView'
import BlogView from './components/views/BlogView'

import { loginUserAction } from './actions/loginAction'

import './Root.css'

const Root = ({ store }) => {
  useEffect(() => {
    loginUserAction()
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route exact path="/login">
            <LoginView />
          </Route>
          <Route exact path="/users">
            <UsersView />
          </Route>
          <Route
            exact
            path="/users/:id"
            render={({ match }) => <UserView userId={match.params.id} />}
          />
          <Route
            exact
            path="/blogs/:id"
            render={({ match }) => <BlogView blogId={match.params.id} />}
          />
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default Root
