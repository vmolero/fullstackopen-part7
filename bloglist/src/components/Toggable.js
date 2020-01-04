import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import PropTypes from 'prop-types'

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
        <Button
          style={hideWhenVisible}
          onClick={toggleVisibility}
          data-cy="show-form-button"
        >
          {buttonLabel}
        </Button>
        <Button
          style={showWhenVisible}
          onClick={toggleVisibility}
          data-cy="hide-form-button"
        >
          Hide create form
        </Button>
      </div>
      <div style={showWhenVisible}>{children}</div>
    </div>
  )
}

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  children: PropTypes.object
}

export default Togglable
