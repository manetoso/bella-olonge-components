import React from 'react'
import PropTypes from 'prop-types'

import './container.css'

const Container = ({ children }) => {
  return <div className="container">{children}</div>
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
