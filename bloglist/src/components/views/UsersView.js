import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logout from '../Logout'
import UserList from '../UserList'
import Toast from '../Toast'
import Menu from '../Menu'

const UsersView = ({ user }) => {
  if (!user) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Menu />
      <h1>Blogs</h1>
      <Toast />
      <h2>Users</h2>
      <UserList />
    </>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, {})(UsersView)
