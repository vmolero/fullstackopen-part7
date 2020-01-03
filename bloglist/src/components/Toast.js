import React from 'react'
import { connect } from 'react-redux'
import { Message } from 'semantic-ui-react'
import { messageLevel } from '../actions/messageAction'
import PropTypes from 'prop-types'

const Toast = ({ level, text }) => {
  return (
    <Message
      hidden={text.length === 0}
      positive={level === messageLevel.SUCCESS}
      error={level === messageLevel.ERROR}
      info={level === messageLevel.INFO}
    >
      <p>{text}</p>
    </Message>
  )
}

Toast.propTypes = {
  level: PropTypes.string,
  text: PropTypes.string
}

const mapStateToProps = state => {
  return {
    level: state.message.level,
    text: state.message.text
  }
}

export default connect(mapStateToProps, null)(Toast)
