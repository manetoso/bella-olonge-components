import React from 'react'

import Paragraph from '../../components/atoms/Paragraph'

export default {
  title: 'Atoms/Paragraph',
  component: Paragraph,
}

const Template = (args) => <Paragraph {...args} />

export const Default = Template.bind({})
Default.args = {}
export const LightGray = Template.bind({})
LightGray.args = {
  children: 'I\'m a great paragraph',
  childrenColorized: 'gray-1'
}
export const NormalGray = Template.bind({})
NormalGray.args = {
  children: 'I\'m a great paragraph',
  childrenColorized: 'gray-4'
}
