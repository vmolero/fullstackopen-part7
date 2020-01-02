import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from './components/views/HomeView'
import UsersView from './components/views/UsersView'

import { loginUserAction } from './actions/loginAction'

import './Root.css'
import LoginView from './components/views/LoginView'

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
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/users">
            <UsersView />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default Root
