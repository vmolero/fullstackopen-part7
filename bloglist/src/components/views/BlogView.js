import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logout from '../Logout'
import Toast from '../Toast'
import Menu from '../Menu'
import Blog from '../Blog'

const BlogView = ({ user, blog }) => {
  if (!user) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Menu />
      <h1>Blogs</h1>
      <Toast />
      <Logout />
      <Blog user={user} blog={blog} />
    </>
  )
}

const mapStateToProps = (state, { blogId }) => {
  const blog = state.blogs.find(blog => blog.id === blogId)
  return {
    blog,
    user: state.user
  }
}

export default connect(mapStateToProps, null)(BlogView)
