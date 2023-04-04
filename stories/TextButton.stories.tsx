import TextButton from '../src/TextButton/TextButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/TextButton',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
);

export const TextButtonDefault = Template.bind({});
TextButtonDefault.args = {
  label: 'Button',
};

export const TextButtonDisabled = Template.bind({});
TextButtonDisabled.args = {
  label: 'Button',
  disabled: true,
  onClick: () => {
    console.log('clicked!');
  },
};
