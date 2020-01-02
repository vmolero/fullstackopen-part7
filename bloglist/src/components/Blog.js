import React from 'react'
import BlogInfo from './BlogInfo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { likeBlogAction, deleteBlogAction } from '../actions/blogAction'
import { showMessageAction } from '../actions/messageAction'
import { Redirect } from 'react-router-dom'

const Blog = ({
  user,
  blog,
  likeBlogAction,
  deleteBlogAction,
  showMessageAction
}) => {
  const likeHandler = () => {
    likeBlogAction({ blog, token: user.token })
    try {
      likeBlogAction({ blog, token: user.token })
      showMessageAction(`Blog ${blog.title} written by ${blog.author} liked!`)
    } catch (err) {
      showMessageAction('Failed to update blog', 'error')
    }
  }

  const deleteHandler = () => {
    deleteBlogAction({ blog, token: user.token })
  }
  if (!blog) {
    return <Redirect to="/" />
  }
  return (
    <>
      <div className="header">
        {blog.title} written by {blog.author || 'Anonymous'}
      </div>
      <BlogInfo
        username={user.username}
        likes={blog.likes}
        url={blog.url}
        ownerUsername={blog.user ? blog.user.username : undefined}
        likeHandler={likeHandler}
        deleteHandler={deleteHandler}
      />
    </>
  )
}

Blog.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired
  }),
  likeBlogAction: PropTypes.func.isRequired,
  deleteBlogAction: PropTypes.func.isRequired,
  showMessageAction: PropTypes.func.isRequired
}

export { Blog }
export default connect(null, {
  likeBlogAction,
  deleteBlogAction,
  showMessageAction
})(Blog)
