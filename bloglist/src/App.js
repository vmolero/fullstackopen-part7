import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import LoginForm from './components/LoginForm'
import Logout from './components/Logout'
import BlogList from './components/BlogList'
import CreateBlogForm from './components/CreateBlogForm'
import Toast from './components/Toast'
import Togglable from './components/Toggable'

import { loginUserAction } from './actions/userAction'

import './App.css'

const App = ({ user, loginUserAction }) => {
  useEffect(() => {
    loginUserAction()
  }, [loginUserAction])

  return (
    <>
      <h1>Blogs</h1>
      <Toast />
      {user === null ? (
        <LoginForm />
      ) : (
        <>
          <Logout />
          <Togglable buttonLabel={'Create new'}>
            <CreateBlogForm />
          </Togglable>
          <BlogList />
        </>
      )}
    </>
  )
}

export default connect(state => ({ user: state.user }), {
  loginUserAction
})(App)
