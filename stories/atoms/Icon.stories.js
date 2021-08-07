import React from 'react'

import Icon from '../../components/atoms/Icon'

export default {
  title: 'Atoms/Icon',
  component: Icon,
}

const Template = (args) => <Icon {...args} />

export const IconFacebook = Template.bind({})
IconFacebook.args = {
    iconType: 'facebook',
}
export const IconInstagram = Template.bind({})
IconInstagram.args = {
    iconType: 'instagram',
}
export const IconLinkedin = Template.bind({})
IconLinkedin.args = {
    iconType: 'linkedin',
}
export const IconTwitter = Template.bind({})
IconTwitter.args = {
    iconType: 'twitter',
}
export const IconSmall = Template.bind({})
IconSmall.args = {
    iconType: 'facebook',
    iconSize: 'sm'
}
export const IconMedium = Template.bind({})
IconMedium.args = {
    iconType: 'facebook',
    iconSize: 'md'
}
export const IconLarge = Template.bind({})
IconLarge.args = {
    iconType: 'facebook',
    iconSize: 'lg'
}
export const IconExtraLarge = Template.bind({})
IconExtraLarge.args = {
    iconType: 'facebook',
    iconSize: 'xl'
}
export const IconWithBackground = Template.bind({})
IconWithBackground.args = {
    iconType: 'twitter',
    hasBackground: true
}
export const IconNotSelectable = Template.bind({})
IconNotSelectable.args = {
    iconType: 'facebook',
    noSelectable: true
}
