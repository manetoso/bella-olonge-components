import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './header.css'

const Header = ({ textDisplayed, textSize, textColorized, isSubtitle }) => {
  return (
    <h1
      className={classnames('header', {
        [`header-${textSize}`]: textSize,
        [`header-${textColorized}`]: textColorized,
        'is-subtitle': isSubtitle
      })}
    >
      {textDisplayed}
    </h1>
  )
}

Header.propTypes = {
  textDisplayed: PropTypes.string.isRequired,
  textSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  textColorized: PropTypes.oneOf(['primary', 'secondary', 'black', 'white']),
  isSubtitle: PropTypes.bool
}

Header.defaultProps = {
  textDisplayed: 'Header',
  textSize: 'md',
  textColorized: 'primary'
}

export default Header
