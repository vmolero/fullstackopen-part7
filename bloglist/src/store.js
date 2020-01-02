import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import blogReducer from './reducers/blogReducer'
import messageReducer from './reducers/messageReducer'
import loginReducer from './reducers/loginReducer'
import userReducer from './reducers/userReducer'

/**
 * Use combineReducers to keep blogs, message and user state
 */
const reducer = combineReducers({
  blogs: blogReducer,
  users: userReducer,
  message: messageReducer,
  user: loginReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export { reducer }
export default store
