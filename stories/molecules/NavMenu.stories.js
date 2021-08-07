import React from 'react'

import NavMenu from '../../components/molecules/NavMenu'

export default {
  title: 'Molecules/NavMenu',
  component: NavMenu,
}

const Template = (args) => <NavMenu {...args} />

export const SampleNavMenu = Template.bind({})
SampleNavMenu.args = {}