import React from 'react'

const Notification = ({ message }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    visibility: message.length > 0 ? 'visible' : 'hidden'
  }
  return <div style={style}>{message}</div>
}

export default Notification
