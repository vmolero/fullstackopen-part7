import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'

const Togglable = ({ buttonLabel, children }) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div>
        <Button style={hideWhenVisible} onClick={toggleVisibility}>
          {buttonLabel}
        </Button>
        <Button style={showWhenVisible} onClick={toggleVisibility}>
          Hide create form
        </Button>
      </div>
      <div style={showWhenVisible}>{children}</div>
    </div>
  )
}

export default Togglable
