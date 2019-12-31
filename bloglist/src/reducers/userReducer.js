import userAction from '../actions/userAction'

const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userAction.LOGIN:
      return action.credentials
    case userAction.LOGOUT:
      return null
    default:
      return state
  }
}

export default reducer
