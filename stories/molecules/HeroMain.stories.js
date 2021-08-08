import React from 'react'

import HeroMain from '../../components/molecules/HeroMain'

export default {
  title: 'Molecules/HeroMain',
  component: HeroMain,
}

const Template = (args) => <HeroMain {...args} />

export const Default = Template.bind({})
Default.args = {}

export const HeroFooter = Template.bind({})
HeroFooter.args = {
  backgroundImage: 'hero-2',
  textheader1: '',
  textheader2: 'Download the app now.',
  textParaghraph: 'Available on your favorite store. Start your premium experience now',
  btn1Label: 'Playstore',
  btn2Label: 'App store',
  btnsRoundType: 'semi',
  hasImage: false
}