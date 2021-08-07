import React from 'react'

import NavItem from '../../components/atoms/NavItem'

export default {
  title: 'Atoms/NavItem',
  component: NavItem,
}

const Template = (args) => <NavItem {...args} />

export const Default = Template.bind({})
Default.args = {}
