import userActionType from '../actions/userAction'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionType.GET_ALL:
      return action.users.map(user => Object.freeze({ ...user }))
    default:
      return state
  }
}

export default reducer
