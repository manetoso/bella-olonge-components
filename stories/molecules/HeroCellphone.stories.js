import React from 'react'

import HeroCellphone from '../../components/molecules/HeroCellphone'

export default {
  title: 'Molecules/HeroCellphone',
  component: HeroCellphone,
}

const Template = (args) => <HeroCellphone {...args} />

export const SampleHeroCellphone = Template.bind({})
SampleHeroCellphone.args = {}