import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import Logout from '../Logout'
// import UserList from '../UserList'

const UsersView = ({ user }) => {
  console.log(user)
  return (
    <>
      <div>Hi there</div>
    </>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    user: { username: 'victor ' }
  }
}

export default withRouter(connect(mapStateToProps, null)(UsersView))
