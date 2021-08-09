import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo'
import IconComp from '../../atoms/IconComp'
import Paragraph from '../../atoms/Paragraph'
import './footer.css'

const Footer = ({ icon1, icon2, icon3, onClick1, onClick2, onClick3 }) => {
  return (
    <div className="footer">
      <Logo logoWidth={150} />
      <div className="footer-icons">
        <IconComp iconType={icon1} iconSize="md" onClick={onClick1} />
        <IconComp iconType={icon2} iconSize="md" onClick={onClick2} />
        <IconComp iconType={icon3} iconSize="md" onClick={onClick3} />
      </div>
      <Paragraph textColorized="gray-4" smallSize={true}>
        Copywright 2020 Bella Onojie.com
      </Paragraph>
    </div>
  )
}

Footer.propTypes = {
  onClick1: PropTypes.func,
  onClick2: PropTypes.func,
  onClick3: PropTypes.func,
  icon1: PropTypes.oneOf(['facebook', 'instagram', 'linkedin', 'twitter']),
  icon2: PropTypes.oneOf(['facebook', 'instagram', 'linkedin', 'twitter']),
  icon3: PropTypes.oneOf(['facebook', 'instagram', 'linkedin', 'twitter']),
}
Footer.defaultProps = {
  icon1: 'twitter',
  icon2: 'facebook',
  icon3: 'instagram',
}

export default Footer
