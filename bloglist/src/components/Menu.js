import React from 'react'
import { Link } from 'react-router-dom'
import { Menu as SMenu } from 'semantic-ui-react'
import Logout from './Logout'

const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  const inline = {
    display: 'inline-block'
  }
  return (
    <SMenu>
      <SMenu.Item>
        <Link style={padding} to="/">
          Home
        </Link>
      </SMenu.Item>
      <SMenu.Item>
        <Link style={padding} to="/users">
          Users
        </Link>
      </SMenu.Item>
      <Logout style={inline} />
    </SMenu>
  )
}

export default Menu
