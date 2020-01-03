import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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
      <Table striped celled className="blogListings">
        <Table.Body>
          {blogs.map(blog => (
            <Table.Row key={blog.id} className="blogListing">
              <Table.Cell>
                <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
              </Table.Cell>
              <Table.Cell>
                {blog.user ? blog.user.name || blog.user.username : 'Admin'}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

BlogList.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  blogs: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      comments: PropTypes.arrayOf(PropTypes.string),
      likes: PropTypes.number,
      user: PropTypes.object
    })
  ),
  initializeBlogsAction: PropTypes.func.isRequired
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
