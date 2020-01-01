import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import LoginForm from '../LoginForm'
import Logout from '../Logout'
import BlogList from '../BlogList'
import CreateBlogForm from '../CreateBlogForm'
import Toast from '../Toast'
import Togglable from '../Toggable'

const HomeView = ({ user }) => {
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

export default connect(state => ({ user: state.user }), null)(HomeView)
