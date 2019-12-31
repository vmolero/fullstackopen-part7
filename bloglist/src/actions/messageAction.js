const messageType = {
  SHOW: 'SHOW',
  HIDE: 'HIDE'
}

const messageLevel = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error'
}

const showMessageAction = (
  text,
  level = messageLevel.SUCCESS,
  seconds = 10
) => {
  return async dispatch => {
    dispatch({
      type: messageType.SHOW,
      level,
      text,
      timeoutId: setTimeout(() => dispatch(hideMessageAction()), seconds * 1000)
    })
  }
}

const hideMessageAction = () => {
  return {
    type: messageType.HIDE
  }
}

export default messageType
export { messageLevel, showMessageAction, hideMessageAction }
