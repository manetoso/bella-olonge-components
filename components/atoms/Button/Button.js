import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import './button.css'

const Button = ({ label, buttonType, roundType }) => {
  return (
    <button
      className={classnames('button', {
        [`button-${buttonType}`]: buttonType,
        [`button-${roundType}`]: roundType,
      })}
    >
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  roundType: PropTypes.oneOf(['full', 'semi']),
}

Button.defaultProps = {
  label: 'Button',
  buttonType: 'primary',
  roundType: 'full',
}

export default Button
