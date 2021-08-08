import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Picture from '../../atoms/Picture'
import Spacer from '../../atoms/Layout/Spacer'
import Header from '../../atoms/Header'
import Paragraph from '../../atoms/Paragraph'
import './heroCellphone.css'

const HeroCellphone = ({
  displayOrder,
  imageNumber,
  textHeader1,
  textHeader2,
  textParagraph,
}) => {
  return (
    <div
      className={classNames('cellphone-hero', {
        [`${displayOrder}`]: displayOrder,
      })}
    >
      <Picture src={`/phone-${imageNumber}.png`} width="100%" />
      <div className="cellphone-hero-content">
        <Spacer size="sm" />
        <Header textDisplayed={textHeader1} isSubtitle={true} />
        <Spacer size="sm" />
        <Header
          textDisplayed={textHeader2}
          textColorized="secondary"
          textSize="sm"
        />
        <Paragraph textColorized="gray-4">{textParagraph}</Paragraph>
      </div>
    </div>
  )
}

HeroCellphone.propTypes = {
  displayOrder: PropTypes.oneOf(['original', 'reverse']),
  imageNumber: PropTypes.oneOf(['2', '3', '4']),
  textHeader1: PropTypes.string,
  textHeader2: PropTypes.string,
  textParagraph: PropTypes.string,
}

HeroCellphone.defaultProps = {
  displayOrder: 'original',
  imageNumber: '2',
  textHeader1: 'Create an account',
  textHeader2: 'Create/login to an existing account to get started',
  textParagraph: 'An account is created with your email and a desired password',
}

export default HeroCellphone
