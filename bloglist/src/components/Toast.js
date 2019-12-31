import React from 'react'
import { connect } from 'react-redux'

const Toast = ({ level, text }) => {
  let visible = ''

  if (text.length === 0) {
    visible = 'hidden'
  }

  const toastClasses = ['toast', level, visible].join(' ')
  return (
    <div className={toastClasses}>
      <span>{text}</span>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    level: state.message.level,
    text: state.message.text
  }
}

export default connect(mapStateToProps, null)(Toast)
