import React from 'react'
import BlogInfo from './BlogInfo'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { likeBlogAction, deleteBlogAction } from '../actions/blogAction'
import { messageLevel, showMessageAction } from '../actions/messageAction'
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
      showMessageAction('Failed to update blog', messageLevel.ERROR)
    }
  }

  const deleteHandler = async () => {
    try {
      if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
        await deleteBlogAction({ blog, token: user.token })
        showMessageAction(`Blog entry ${blog.title} deleted`)
      }
      return
    } catch (err) {
      // do nothing
    }
    showMessageAction('Failed to delete blog', messageLevel.ERROR)
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
      {blog.comments.length ? (
        <>
          <h3>Comments</h3>
          <ul>
            {blog.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </>
      ) : null}
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
