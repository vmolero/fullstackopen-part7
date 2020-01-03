import React from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'semantic-ui-react'

import { messageLevel, showMessageAction } from '../actions/messageAction'
import { loginUserAction } from '../actions/loginAction'
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
    <Form
      onSubmit={handleLogin({
        username: usernameInput.value,
        password: passwordInput.value
      })}
    >
      <Form.Field>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Username"
          {...usernameInput}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          {...passwordInput}
        />
      </Form.Field>
      <Button type="submit">login</Button>
    </Form>
  )
}

export default connect(null, {
  loginUserAction,
  showMessageAction
})(LoginForm)
