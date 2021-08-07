import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './spacer.css'

const Spacer = ({ size, isVisible, isHorizontal, isVertical, maxHeight }) => {
  return (
    <div
      className={classNames('spacer', {
        [`spacer-${size}`]: size,
        'is-visible': isVisible,
        'horizontal': isHorizontal,
        'vertical': isVertical
      })}
      style={{
          maxHeight: maxHeight
      }}
    />
  )
}

Spacer.defaultProps = {
    maxHeight: '100%'
}

Spacer.propTypes = {
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  isVisible: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  isVertical: PropTypes.bool,
  maxHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Spacer
