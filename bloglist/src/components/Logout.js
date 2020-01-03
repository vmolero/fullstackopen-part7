import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { messageLevel, showMessageAction } from '../actions/messageAction'
import { logoutUserAction } from '../actions/loginAction'
import { Button } from 'semantic-ui-react'

const Logout = ({ username, logoutUserAction, showMessageAction }) => {
  const handleLogout = async () => {
    try {
      await logoutUserAction()
      showMessageAction('Successfully logged out')
    } catch (err) {
      showMessageAction('Failed to log out', messageLevel.ERROR)
    }
  }

  const Span = styled.span`
    margin-right: 8px;
  `
  const Div = styled.div`
    margin-right: 0px;
    padding: 0px;
  `
  return (
    <Div>
      <Span>
        Logged in as <strong>{username}</strong>
      </Span>
      <Button type="button" onClick={handleLogout}>
        Logout
      </Button>
    </Div>
  )
}

export default connect(state => ({ username: state.user.username }), {
  logoutUserAction,
  showMessageAction
})(Logout)
