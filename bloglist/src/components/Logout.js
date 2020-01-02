import React from 'react'
import { connect } from 'react-redux'

import { messageLevel, showMessageAction } from '../actions/messageAction'
import { logoutUserAction } from '../actions/loginAction'

const Logout = ({ style, username, logoutUserAction, showMessageAction }) => {
  const handleLogout = async () => {
    try {
      await logoutUserAction()
      showMessageAction('Successfully logged out')
    } catch (err) {
      showMessageAction('Failed to log out', messageLevel.ERROR)
    }
  }

  return (
    <div style={style}>
      Logged in as {username}{' '}
      <button type="button" onClick={handleLogout}>
        logout
      </button>
    </div>
  )
}

export default connect(state => ({ username: state.user.username }), {
  logoutUserAction,
  showMessageAction
})(Logout)
