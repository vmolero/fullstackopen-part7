import React from 'react'
import { connect } from 'react-redux'

import { messageLevel, showMessageAction } from '../actions/messageAction'
import { logoutUserAction } from '../actions/userAction'

const Logout = ({ username, logoutUserAction, showMessageAction }) => {
  const handleLogout = async () => {
    try {
      await logoutUserAction()
      showMessageAction('Successfully logged out')
    } catch (err) {
      showMessageAction('Failed to log out', messageLevel.ERROR)
    }
  }

  return (
    <div>
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
