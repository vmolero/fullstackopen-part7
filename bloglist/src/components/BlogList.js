import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

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
