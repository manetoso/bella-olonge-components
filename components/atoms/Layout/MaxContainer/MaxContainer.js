import React from 'react'
import PropTypes from 'prop-types'

const MaxContainer = ({ children }) => {
  return <div className="max-container">{children}</div>
}

MaxContainer.propTypes = {
  children: PropTypes.node,
}

export default MaxContainer
