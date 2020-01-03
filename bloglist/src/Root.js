import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import HomeView from './components/views/HomeView'
import UsersView from './components/views/UsersView'
import LoginView from './components/views/LoginView'
import UserView from './components/views/UserView'
import BlogView from './components/views/BlogView'

import { loginUserAction } from './actions/loginAction'

const Root = ({ store }) => {
  useEffect(() => {
    loginUserAction()
  }, [])

  const StyledContainer = styled(Container)`
    padding: 8px;
  `

  return (
    <StyledContainer>
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
    </StyledContainer>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
