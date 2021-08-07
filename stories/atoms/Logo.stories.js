import React from 'react'

import Logo from '../../components/atoms/Logo'

export default {
  title: 'Atoms/Logo',
  component: Logo,
}

const Template = (args) => <Logo {...args} />

export const Default = Template.bind({})
Default.args = {
  logoWidth: 200,
}
