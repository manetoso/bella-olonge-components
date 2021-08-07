import React from 'react'

import IconComp from '../../atoms/IconComp/IconComp'
import Spacer from '../../atoms/Layout/Spacer/Spacer'
import NavItem from '../../atoms/NavItem/NavItem'
import './navMenu.css'

const NavMenu = ({ itemActive }) => {
  return (
    <nav className="nav">
      <input type="checkbox" />
      <div className="nav-icon">
        <IconComp iconType="menu" iconSize="md" />
      </div>
      <ul className="nav-list">
        <NavItem textLink="home" isActive={true} />
        <Spacer size="xs" />
        <NavItem textLink="product" />
        <Spacer size="xs" />
        <NavItem textLink="faq" />
        <Spacer size="xs" />
        <NavItem textLink="contact" />
      </ul>
    </nav>
  )
}

export default NavMenu
