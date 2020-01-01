import React from 'react'
import { render } from '@testing-library/react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import blogReducer from '../reducers/blogReducer'
import messageReducer from '../reducers/messageReducer'
import userReducer from '../reducers/userReducer'

const initialState = {
  user: null,
  message: { text: '', seconds: 0 },
  blogs: []
}

const renderReact = jsxElement => {
  const component = render(jsxElement)
  component.rerender(jsxElement)
  return component
}

const reducer = combineReducers({
  blogs: blogReducer,
  message: messageReducer,
  user: userReducer
})

/**
 *
 *  normally here you'd do:
 *  const store = createStore(reducer)
 *  ReactDOM.render(
 *    <Provider store={store}>
 *      <Counter />
 *    </Provider>,
 *    document.getElementById('root'),
 *  )
 *  but for this test we'll umm... not do that :)

 *  Now here's what your test will look like:

 *  this is a handy function that I normally make available for all my tests
 *  that deal with connected components.
 *  you can provide initialState or the entire store that the ui is rendered with} ui
 *
 * @param {*} param1
 */
function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(reducer, initialState, applyMiddleware(thunk))
  } = {}
) {
  return {
    ...renderReact(<Provider store={store}>{ui}</Provider>),
    //  adding `store` to the returned utilities to allow us
    //  to reference it in our tests (just try to avoid using
    //  this to test implementation details).
    store
  }
}

export default { renderReact, renderWithRedux }
