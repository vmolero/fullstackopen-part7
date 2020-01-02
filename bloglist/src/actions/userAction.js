import userService from '../services/userService'

const type = {
  GET_ALL: 'GET_ALL'
}

const getAllUserAction = () => {
  return async dispatch => {
    const users = await userService.getAll()
    dispatch({
      type: type.GET_ALL,
      users
    })
  }
}

export default type
export { getAllUserAction }
