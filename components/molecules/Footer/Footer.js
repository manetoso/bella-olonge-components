import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/Logo'
import IconComp from '../../atoms/IconComp'
import Paragraph from '../../atoms/Paragraph'
import './footer.css'

const Footer = ({ link1, link2, link3, icon1, icon2, icon3 }) => {
  const handleLink1 = (event) => {
    window.location.href = link1
  }
  const handleLink2 = (event) => {
    window.location.href = link2
  }
  const handleLink3 = (event) => {
    window.location.href = link3
  }

  return (
    <div className="footer">
      <Logo logoWidth={150} />
      <div className="footer-icons">
        <IconComp iconType={icon1} iconSize="md" onClick={handleLink1} />
        <IconComp iconType={icon2} iconSize="md" onClick={handleLink2} />
        <IconComp iconType={icon3} iconSize="md" onClick={handleLink3} />
      </div>
      <Paragraph textColorized="gray-4" smallSize={true}>
        Copywright 2020 Bella Onojie.com
      </Paragraph>
    </div>
  )
}

Footer.propTypes = {
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  icon1: PropTypes.oneOf(['facebook', 'instagram', 'linkedin', 'twitter']),
  icon2: PropTypes.oneOf(['facebook', 'instagram', 'linkedin', 'twitter']),
  icon3: PropTypes.oneOf(['facebook', 'instagram', 'linkedin', 'twitter']),
}
Footer.defaultProps = {
  link1: 'https://twitter.com/?lang=es',
  link2: 'https://www.facebook.com/enespanol/',
  link3: 'https://www.instagram.com/?hl=es',
  icon1: 'twitter',
  icon2: 'facebook',
  icon3: 'instagram',
}

export default Footer
