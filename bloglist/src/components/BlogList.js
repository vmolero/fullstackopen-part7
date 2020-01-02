import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import {
  likeBlogAction,
  deleteBlogAction,
  initializeBlogsAction
} from '../actions/blogAction'
import { showMessageAction } from '../actions/messageAction'
import { Link } from 'react-router-dom'

const BlogList = ({ user, blogs, initializeBlogsAction }) => {
  useEffect(() => {
    user && initializeBlogsAction(user.token)
  }, [user, initializeBlogsAction])

  return (
    <div>
      <h2>List</h2>
      <ul className="blogListings">
        {blogs.map(blog => (
          <li key={blog.id} className="blogListing">
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    user: state.user
  }
}

const mapDispatchToProps = {
  likeBlogAction,
  deleteBlogAction,
  showMessageAction,
  initializeBlogsAction
}

const ConnectedBlogList = connect(mapStateToProps, mapDispatchToProps)(BlogList)

export default ConnectedBlogList
