import React from 'react'
import { connect } from 'react-redux'

import { messageLevel, showMessageAction } from '../actions/messageAction'
import { loginUserAction } from '../actions/userAction'
import { useField } from '../hooks'

const LoginForm = ({ loginUserAction, showMessageAction }) => {
  const usernameInput = useField('text')
  const passwordInput = useField('password')

  const handleLogin = ({ username, password }) => async event => {
    event.preventDefault()
    try {
      await loginUserAction({ username, password })
      showMessageAction('Successfully logged in as ' + username)
    } catch (err) {
      showMessageAction('Failed to log in', messageLevel.ERROR)
    }
  }

  return (
    <form
      onSubmit={handleLogin({
        username: usernameInput.value,
        password: passwordInput.value
      })}
      onReset={evt => {
        evt.preventDefault()
        usernameInput.onReset()
        passwordInput.onReset()
      }}
    >
      <div>
        username
        <input name="Username" {...usernameInput} />
      </div>
      <div>
        password
        <input name="Password" {...passwordInput} />
      </div>
      <button type="submit">login</button>
      <button type="reset">reset</button>
    </form>
  )
}

export default connect(null, {
  loginUserAction,
  showMessageAction
})(LoginForm)
