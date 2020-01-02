import actionType from '../actions/blogAction'

const initialState = []

function sortByLikes(blogsCopy) {
  blogsCopy.sort((blogA, blogB) =>
    parseInt(blogA.likes) > parseInt(blogB.likes) ? -1 : 1
  )
}

function createNewState(newElement, restOfElements) {
  const newState = [...restOfElements, newElement]
  return newState
}

const asObject = blog => {
  return Object.freeze({ ...blog })
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_COMMENT:
    case actionType.LIKE: {
      const filteredState = state.filter(blog => blog.id !== action.blog.id)
      const blogList = createNewState(asObject(action.blog), filteredState)
      sortByLikes(blogList)
      return blogList
    }
    case actionType.NEW: {
      const newBlog = asObject(action.blog)
      const blogList = createNewState(newBlog, state)
      sortByLikes(blogList)
      return blogList
    }
    case actionType.INIT: {
      const allBlogs = action.blogs.map(asObject)
      sortByLikes(allBlogs)
      return allBlogs
    }
    case actionType.DELETE: {
      const filteredState = state.filter(blog => blog.id !== action.blog.id)
      return [...filteredState]
    }
    default:
      return state
  }
}

export default reducer
