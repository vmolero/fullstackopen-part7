import React from 'react'
import LoginForm from '../LoginForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Toast from '../Toast'

const LoginView = ({ user }) => {
  console.log(user)
  if (user) {
    return <Redirect to="/" />
  }
  return (
    <>
      <h1>Blogs</h1>
      <Toast />
      <LoginForm />
    </>
  )
}

export default connect(state => ({ user: state.user }), null)(LoginView)
