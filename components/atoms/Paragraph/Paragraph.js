import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './paragraph.css'

const Paragraph = ({ children, textColorized, smallSize }) => {
  return (
    <p
      className={classNames('paragraph', {
        [`paragraph-${textColorized}`]: textColorized,
        'small': smallSize
      })}
    >
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  textColorized: PropTypes.oneOf(['gray-1', 'gray-4']),
  smallSize: PropTypes.bool
}

Paragraph.defaultProps = {
  children: 'lorem impsum',
  textColorized: 'gray-4',
  smallSize: false
}

export default Paragraph
