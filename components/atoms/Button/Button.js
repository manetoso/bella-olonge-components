import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './button.css'

const Button = ({ label, buttonType, roundType, btnOnClick }) => {
  return (
    <button
      className={classnames('button', {
        [`button-${buttonType}`]: buttonType,
        [`button-${roundType}`]: roundType,
      })}
      onClick={btnOnClick}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  roundType: PropTypes.oneOf(['full', 'semi']),
  btnOnClick: PropTypes.func,
}

Button.defaultProps = {
  label: 'Button',
  buttonType: 'primary',
  roundType: 'full',
}

export default Button
