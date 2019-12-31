import blogService from '../services/blogService'

const type = {
  INIT: 'INIT',
  LIKE: 'LIKE',
  NEW: 'NEW',
  DELETE: 'DELETE'
}

const likeBlogAction = (blog, token) => {
  return async dispatch => {
    const blogToUpdate = { ...blog, likes: blog.likes + 1 }
    const updatedBlog = await blogService.update(blogToUpdate, token)
    dispatch({
      type: type.LIKE,
      blog: updatedBlog
    })
  }
}

const newBlogAction = (blog, token) => {
  return async dispatch => {
    const newBlog = await blogService.create(blog, token)
    dispatch({
      type: type.NEW,
      blog: newBlog
    })
  }
}

const deleteBlogAction = (blog, token) => {
  return async dispatch => {
    await blogService.delete(blog, token)
    dispatch({
      type: type.DELETE,
      blog
    })
  }
}

const initializeBlogsAction = token => {
  return async dispatch => {
    const blogs = await blogService.getAll(token)
    dispatch({
      type: type.INIT,
      blogs
    })
  }
}

export default type
export {
  likeBlogAction,
  newBlogAction,
  deleteBlogAction,
  initializeBlogsAction
}
