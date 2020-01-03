import React, { useEffect } from 'react'
import LoginForm from '../LoginForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUserAction } from '../../actions/loginAction'
import Header from '../Header'

const LoginView = ({ user, loginUserAction }) => {
  useEffect(() => {
    loginUserAction()
  }, [loginUserAction])
  if (user) {
    return <Redirect to="/" />
  }
  return (
    <>
      <Header />
      <LoginForm />
    </>
  )
}

export default connect(state => ({ user: state.user }), { loginUserAction })(
  LoginView
)
