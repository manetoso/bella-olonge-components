import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './header.css'
import { mapSize } from './helper'

const Header = ({ textDisplayed, textSize, textColorized, isSubtitle, maxWidth }) => {
  return (
    <h1
      className={classnames('header', {
        [`header-${textSize}`]: textSize,
        [`header-${textColorized}`]: textColorized,
        'is-subtitle': isSubtitle
      })}
      style={{
        maxWidth: mapSize(maxWidth)
      }}
    >
      {textDisplayed}
    </h1>
  )
}

Header.propTypes = {
  textDisplayed: PropTypes.string.isRequired,
  textSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  textColorized: PropTypes.oneOf(['primary', 'secondary', 'black', 'white']),
  isSubtitle: PropTypes.bool,
  maxWidth: PropTypes.number
}

Header.defaultProps = {
  textDisplayed: 'Header',
  textSize: 'md',
  textColorized: 'primary'
}

export default Header
