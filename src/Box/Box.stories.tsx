import Box from './Box';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/Box',
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
  <>
    <Box {...args}>
      <div style={{backgroundColor: 'red', height: '100%', width: '100%'}} />
    </Box>
  </>
);

export const BoxDefault = Template.bind({});
BoxDefault.args = {
  h: '20px',
  w: '20px',
};
