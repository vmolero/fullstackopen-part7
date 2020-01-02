import loginService from '../services/loginService'

const type = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}

const loginUserAction = credentials => {
  return async dispatch => {
    const loggedUser = await loginService.login(credentials)
    if (!('token' in loggedUser)) {
      throw new Error('Token not found')
    }
    dispatch({
      type: type.LOGIN,
      credentials: loggedUser
    })
  }
}

const logoutUserAction = () => {
  return async dispatch => {
    await loginService.logout()
    dispatch({
      type: type.LOGOUT
    })
  }
}

export default type
export { loginUserAction, logoutUserAction }
