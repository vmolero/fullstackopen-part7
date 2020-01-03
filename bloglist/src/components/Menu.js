import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu as SMenu } from 'semantic-ui-react'
import styled from 'styled-components'
import Logout from './Logout'

const Menu = () => {
  const [activeItem, setActiveItem] = useState('home')
  const StyledMenu = styled(SMenu)`
    padding: 0px;
    margin: 0px 4px !important;
  `

  const handleItemClick = name => () => setActiveItem(name)
  return (
    <StyledMenu>
      <SMenu.Item
        as={Link}
        to="/"
        name="Home"
        active={activeItem === 'home'}
        onClick={handleItemClick('home')}
      >
        Home
      </SMenu.Item>
      <SMenu.Item
        as={Link}
        to="/users"
        name="Users"
        active={activeItem === 'users'}
        onClick={handleItemClick('users')}
      >
        Users
      </SMenu.Item>
      <SMenu.Item position="right">
        <Logout />
      </SMenu.Item>
    </StyledMenu>
  )
}

export default Menu
