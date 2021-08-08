import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo'
import NavMenu from '../NavMenu'
import './navbar.css'

const Navbar = (props) => {
  return (
    <div className="navbar">
      <Logo logoWidth={150} />
      <NavMenu />
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar
