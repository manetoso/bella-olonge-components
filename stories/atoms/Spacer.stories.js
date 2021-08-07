import React from 'react'

import Spacer from '../../components/atoms/Layout/Spacer'

export default {
  title: 'Atoms/Spacer',
  component: Spacer,
}

const Template = (args) => <Spacer {...args} />

export const SampleSpacer = Template.bind({})
SampleSpacer.args = {
    size: 'xs',
    isVisible: true
}