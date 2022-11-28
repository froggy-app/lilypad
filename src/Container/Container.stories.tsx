import Container from './Container';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <>
    <Container {...args}>
      <div style={{backgroundColor: 'red', height: '100%', width: '100%'}} />
    </Container>
  </>
);

export const ContainerDefault = Template.bind({});
ContainerDefault.args = {
  height: '20px',
  width: '20px',
};
