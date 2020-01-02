import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeView from './components/views/HomeView'
import UsersView from './components/views/UsersView'
import LoginView from './components/views/LoginView'
import UserView from './components/views/UserView'

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
        </Switch>
      </Router>
    </Provider>
  )
}

export default Root
