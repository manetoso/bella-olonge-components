import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Spacer from '../../atoms/Layout/Spacer'
import Header from '../../atoms/Header'
import Paragraph from '../../atoms/Paragraph'
import Button from '../../atoms/Button'
import Picture from '../../atoms/Picture'
import './heroMain.css'

const HeroMain = ({
  backgroundImage,
  textheader1,
  textheader2,
  textParaghraph,
  btn1Label,
  btn2Label,
  btn1OnClick,
  btn2OnClick,
  btnsRoundType,
  hasImage,
}) => {
  return (
    <div
      className={classNames('hero', {
        [`${backgroundImage}`]: backgroundImage,
      })}
    >
      <Spacer size="xl" />
      <Header textDisplayed={textheader1} textSize="xs" textColorized="white" />
      <Spacer size="md" />
      <Header
        className="hero-main-header"
        textDisplayed={textheader2}
        textSize="lg"
        textColorized="white"
        maxWidth={1000}
      />
      <Spacer size="md" />
      <Paragraph textColorized="gray-1">{textParaghraph}</Paragraph>
      <Spacer size="md" />
      <div className="hero-buttons">
        <Button
          label={btn1Label}
          buttonType="primary"
          roundType={btnsRoundType}
          btnOnClick={btn1OnClick}
        />
        <Spacer size="md" />
        <Button
          label={btn2Label}
          buttonType="tertiary"
          roundType={btnsRoundType}
          btnOnClick={btn2OnClick}
        />
      </div>
      <Spacer size="xl" />
      {hasImage && (
        <div className="hero-cell-phones">
          <Picture src="/phone-1.png" width="100%" />
        </div>
      )}
    </div>
  )
}

HeroMain.propTypes = {
  backgroundImage: PropTypes.oneOf(['hero-1', 'hero-2']),
  textheader1: PropTypes.string,
  textheader2: PropTypes.string,
  textParaghraph: PropTypes.string,
  btn1Label: PropTypes.string,
  btn2Label: PropTypes.string,
  btn1OnClick: PropTypes.func,
  btn2OnClick: PropTypes.func,
  btnsRoundType: PropTypes.oneOf(['full', 'semi']),
  hasImage: PropTypes.bool,
}

HeroMain.defaultProps = {
  backgroundImage: 'hero-1',
  textheader1: 'Food app',
  textheader2: 'Why stay hungry when you can order form Bella Onojie',
  textParaghraph: 'Download the bella onoje’s food app now on',
  btn1Label: 'Playstore',
  btn2Label: 'App store',
  btnsRoundType: 'full',
  hasImage: true,
}

export default HeroMain
