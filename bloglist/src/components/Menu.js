import React from 'react'
import { Link } from 'react-router-dom'
import Logout from './Logout'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  const inline = {
    display: 'inline-block'
  }
  return (
    <div>
      <Link style={padding} to="/">
        Home
      </Link>
      <Link style={padding} to="/users">
        Users
      </Link>
      <Logout style={inline} />
    </div>
  )
}

export default Menu
