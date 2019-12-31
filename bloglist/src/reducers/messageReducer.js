import messageAction, { messageLevel } from '../actions/messageAction'

const initialState = {
  text: 'Welcome to the Blog app',
  level: messageLevel.INFO,
  timeout: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case messageAction.SHOW:
      state.timeoutId && clearTimeout(state.timeoutId)
      return {
        text: action.text,
        level: action.level,
        timeoutId: action.timeoutId
      }
    case messageAction.HIDE:
      return { text: '', level: '', timeoutId: false }
    default:
      return state
  }
}

export default reducer
