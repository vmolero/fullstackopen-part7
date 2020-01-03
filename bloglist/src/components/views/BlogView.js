import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Blog from '../Blog'
import Header from '../Header'

const BlogView = ({ user, blog }) => {
  if (!user) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
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

BlogView.propTypes = {
  user: PropTypes.object.isRequired,
  blog: PropTypes.object.isRequired
}

export default connect(mapStateToProps, null)(BlogView)
