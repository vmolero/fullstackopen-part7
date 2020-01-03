import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Toast from './Toast'
import Menu from './Menu'
import { Header as SHeader } from 'semantic-ui-react'

const Header = ({ user }) => {
  return (
    <>
      {user ? <Menu /> : null}
      <SHeader as="h1">Blogs</SHeader>
      <Toast />
    </>
  )
}

Header.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    name: PropTypes.string,
    token: PropTypes.string.isRequired
  })
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Header)
