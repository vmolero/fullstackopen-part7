const type = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

const loginUserAction = credentials => {
  // Login using service
  return async dispatch => {
    dispatch({
      type: type.LOGIN,
      credentials
    })
  }
}

const logoutUserAction = () => {
  return {
    type: type.LOGOUT
  }
}

export default type
export { loginUserAction, logoutUserAction }
