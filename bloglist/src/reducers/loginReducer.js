import loginAction from '../actions/loginAction'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case loginAction.LOGIN:
      return Object.freeze(action.credentials)
    case loginAction.LOGOUT:
      return null
    default:
      return state
  }
}

export default reducer
