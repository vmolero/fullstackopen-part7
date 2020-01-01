import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import blogReducer from './reducers/blogReducer'
import messageReducer from './reducers/messageReducer'
import userReducer from './reducers/userReducer'

/**
 * Use combineReducers to keep blogs, message and user state
 */
const reducer = combineReducers({
  blogs: blogReducer,
  message: messageReducer,
  user: userReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store
