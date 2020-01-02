import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Logout from '../Logout'
import UserBlogList from '../UserBlogList'
import Toast from '../Toast'
import Menu from '../Menu'

const UserView = ({ user, userId }) => {
  if (!user) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Menu />
      <h1>Blogs</h1>
      <Toast />
      <Logout />
      <UserBlogList userId={userId} />
    </>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(UserView)
