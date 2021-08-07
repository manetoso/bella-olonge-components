import React from 'react';

import Button from '../../components/atoms/Button';

export default {
  title: 'Atoms/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary'
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary'
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  buttonType: 'tertiary'
};

export const FullRounded = Template.bind({});
FullRounded.args = {
  roundType: 'full'
};

export const SemiRounded = Template.bind({});
SemiRounded.args = {
  roundType: 'semi'
};