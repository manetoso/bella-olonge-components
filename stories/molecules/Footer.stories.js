import React from 'react'

import Footer from '../../components/molecules/Footer'

export default {
  title: 'Molecules/Footer',
  component: Footer,
  argTypes: {
    onClick: {
        action: 'Clicked!'
    }
  }
}

const Template = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {}