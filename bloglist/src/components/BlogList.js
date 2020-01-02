import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Blog from './Blog'
import {
  likeBlogAction,
  deleteBlogAction,
  initializeBlogsAction
} from '../actions/blogAction'
import { messageLevel, showMessageAction } from '../actions/messageAction'
import { Link } from 'react-router-dom'

const BlogList = ({
  user,
  blogs,
  showMessageAction,
  deleteBlogAction,
  initializeBlogsAction,
  likeBlogAction
}) => {
  const handleDelete = ({ blog, token }) => async () => {
    try {
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
        await deleteBlogAction({ blog, token })
        showMessageAction(`Blog entry ${blog.title} deleted`)
      }
      return
    } catch (err) {
      // do nothing
    }
    showMessageAction('Failed to delete blog', messageLevel.ERROR)
  }

  const handleLike = ({ blog, token }) => async () => {
    try {
      likeBlogAction({ blog, token })
      showMessageAction(`Blog ${blog.title} written by ${blog.author} liked!`)
    } catch (err) {
      showMessageAction('Failed to update blog', 'error')
    }
  }

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
