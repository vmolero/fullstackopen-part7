import React from 'react'
import { connect } from 'react-redux'

import BlogList from '../BlogList'
import CreateBlogForm from '../CreateBlogForm'
import Toast from '../Toast'
import Togglable from '../Toggable'
import { Redirect } from 'react-router-dom'
import Menu from '../Menu'

const HomeView = ({ user }) => {
  if (!user) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Menu />
      <h1>BLogs</h1>
      <Toast />
      <Togglable buttonLabel={'Create new'}>
        <CreateBlogForm />
      </Togglable>
      <BlogList />
    </>
  )
}

export default connect(state => ({ user: state.user }), null)(HomeView)
