import React from 'react'

import Container from '../../components/atoms/Layout/Container'
import Paragraph from '../../components/atoms/Paragraph/Paragraph'

export default {
  title: 'Atoms/Container',
  component: Container,
}

const Template = (args) => <Container {...args} />;

export const SampleContainer = Template.bind({});
SampleContainer.args = {
  children: (
    <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id
        scelerisque libero. Cras vel nibh aliquam, elementum justo vitae,
        interdum tellus. Nam scelerisque orci leo, ac ultrices ligula auctor
        quis. Donec nunc urna, molestie sed sollicitudin id, feugiat vitae nibh.
        Donec gravida dui et metus mattis ullamcorper. Vestibulum venenatis
        consequat ante in ornare. Vestibulum ante ipsum primis in faucibus orci
        luctus et ultrices posuere cubilia curae; Nunc interdum, dui quis
        facilisis semper, velit orci tristique sem, ultrices commodo tellus
        massa ac quam. Suspendisse ac bibendum libero, et sagittis dolor.
        Quisque at laoreet libero. Nam nec velit sed tortor sagittis bibendum.
        Quisque id orci sed augue rhoncus ornare. Mauris vitae porta felis.
        Maecenas ut libero sollicitudin, pulvinar ante nec, tristique libero.
        Pellentesque egestas varius commodo. Aenean sed pretium nisi. Morbi
        bibendum, dui dapibus sagittis egestas, elit arcu ornare ligula, vitae
        hendrerit enim quam vel lectus. Fusce blandit molestie purus in rutrum.
        Integer non ornare nibh, quis ornare nisl. Donec sodales euismod nunc ut
        varius. In convallis ultricies luctus.
      </Paragraph>
  )
};
