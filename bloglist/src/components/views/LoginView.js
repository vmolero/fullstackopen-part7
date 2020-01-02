import React, { useEffect } from 'react'
import LoginForm from '../LoginForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Toast from '../Toast'
import { loginUserAction } from '../../actions/loginAction'

const LoginView = ({ user, loginUserAction }) => {
  useEffect(() => {
    loginUserAction()
  }, [loginUserAction])
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

export default connect(state => ({ user: state.user }), { loginUserAction })(
  LoginView
)
