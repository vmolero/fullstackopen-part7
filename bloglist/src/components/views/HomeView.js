import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import BlogList from '../BlogList'
import CreateBlogForm from '../CreateBlogForm'
import Togglable from '../Toggable'
import { Redirect } from 'react-router-dom'
import Header from '../Header'

const HomeView = ({ user }) => {
  if (!user) {
    return <Redirect to="/login" />
  }

  const StyledBlogList = styled(BlogList)`
    padding: 8px;
  `

  return (
    <>
      <Header />
      <Togglable buttonLabel={'Create new'}>
        <CreateBlogForm />
      </Togglable>
      <StyledBlogList />
    </>
  )
}

HomeView.propTypes = {
  user: PropTypes.object
}

export default connect(state => ({ user: state.user }), null)(HomeView)
