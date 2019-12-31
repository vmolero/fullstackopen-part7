import actionType from '../actions/blogAction'

const initialState = []

function createNewState(newElement, restOfElements) {
  const newState = [...restOfElements, newElement]
  return newState
}

const asObject = blog => {
  return Object.freeze({ ...blog })
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LIKE: {
      const filteredState = state.filter(blog => blog.id !== action.blog.id)
      return createNewState(asObject(action.blog), filteredState)
    }
    case actionType.NEW: {
      const newBlog = asObject(action.anecdote)
      return createNewState(newBlog, state)
    }
    case actionType.INIT: {
      const allBlogs = action.blogs.map(asObject)
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
