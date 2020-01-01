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

import { loginUserAction } from './actions/userAction'

import './Root.css'
import LoginForm from './components/LoginForm'
import LoginView from './components/views/LoginView'

const Root = ({ store }) => {
  useEffect(() => {
    loginUserAction()
  }, [loginUserAction])

  // {!store.user && <Redirect to="/login" />}
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/users">
            <UsersView />
          </Route>
        </Switch>
        )
      </Router>
    </Provider>
  )
}

export default Root
