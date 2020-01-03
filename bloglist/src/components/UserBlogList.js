import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const BlogList = ({ blogs, user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <ul className="userBlogTitles">
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  )
}

function hasUser(blog) {
  return 'user' in blog && blog.user && 'id' in blog.user
}
const mapStateToProps = (state, { userId }) => {
  return {
    blogs: state.blogs.filter(blog => hasUser(blog) && blog.user.id === userId),
    user: state.users.find(user => user.id === userId)
  }
}

BlogList.propTypes = {
  user: PropTypes.object,
  blogs: PropTypes.arrayOf(PropTypes.object).isRequired
}

const ConnectedBlogList = connect(mapStateToProps, null)(BlogList)

export default ConnectedBlogList
