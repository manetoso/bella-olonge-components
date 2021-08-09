import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Picture from '../Picture'
import { mapIcon, mapSize } from './helpers'
import './iconComp.css'

const IconComp = ({ iconType, iconSize, hasBackground, noSelectable, onClick }) => {
  return (
    <div
      className={classNames('icon', {
        'has-background': hasBackground,
        'no-selectable': noSelectable,
      })}
      style={{
        width: mapSize(iconSize),
        height: mapSize(iconSize),
      }}
      onClick={onClick}
    >
      <Picture src={mapIcon(iconType)} width={mapSize(iconSize)} />
    </div>
  )
}

IconComp.propTypes = {
  iconType: PropTypes.oneOf(['facebook', 'instagram', 'linkedin', 'twitter', 'menu']),
  iconSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  hasBackground: PropTypes.bool,
  noSelectable: PropTypes.bool,
  onClick: PropTypes.func
}

IconComp.defaultProps = {
  iconSize: 'md',
  hasBackground: false,
  noSelectable: false,
}

export default IconComp
