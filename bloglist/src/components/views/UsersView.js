import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Header as SHeader } from 'semantic-ui-react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import UserList from '../UserList'
import Header from '../Header'

const UsersView = ({ user }) => {
  if (!user) {
    return <Redirect to="/login" />
  }
  const Div = styled.div`
    margin-top: 48px;
  `
  return (
    <>
      <Header />
      <Div>
        <SHeader as="h2">Users</SHeader>
        <UserList />
      </Div>
    </>
  )
}
const mapStateToProps = state => {
  return {
    user: state.user
  }
}

UsersView.propTypes = {
  user: PropTypes.object
}

export default connect(mapStateToProps, {})(UsersView)
