import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { getWidth } from './helpers'
import './picture.css'

const Picture = ({ src, width, hasShadow }) => {
  return (
    <picture className={ classNames( 'picture', {
      'has-shadow': hasShadow
    })}>
      <img src={src} style={{ maxWidth: getWidth(width) }} alt='great-img'/>
    </picture>
  )
}

Picture.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hasShadow: PropTypes.bool
}

export default Picture
