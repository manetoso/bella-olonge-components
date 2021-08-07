import React from 'react'

import Header from '../../components/atoms/Header'

export default {
  title: 'Atoms/Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const Default = Template.bind({})
Default.args = {}
export const ExtraSmall = Template.bind({})
ExtraSmall.args = {
  textSize: 'xs',
}
export const Small = Template.bind({})
Small.args = {
  textSize: 'sm',
}
export const Medium = Template.bind({})
Medium.args = {
  textSize: 'md',
}
export const Large = Template.bind({})
Large.args = {
  textSize: 'lg',
}
export const ColorPrimary = Template.bind({})
ColorPrimary.args = {
  textColorized: 'primary',
}
export const ColorSecondary = Template.bind({})
ColorSecondary.args = {
  textColorized: 'secondary',
}
export const ColorBlack = Template.bind({})
ColorBlack.args = {
  textColorized: 'black',
}
export const ColorWhite = Template.bind({})
ColorWhite.args = {
  textColorized: 'white',
}
