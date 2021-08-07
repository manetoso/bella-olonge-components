import React from 'react'
import PropTypes from 'prop-types'

import Picture from '../Picture'

const Logo = ({ logoWidth }) => {
  return <Picture src="./logo.svg" width={logoWidth} />
}

Logo.propTypes = {
  logoWidth: PropTypes.number.isRequired,
}

Logo.defaultProps = {
  logoWidth: 200,
}

export default Logo
