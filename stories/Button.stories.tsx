import Button from '../src/Button/Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonDefault = Template.bind({});
ButtonDefault.args = {
  label: 'Button',
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  label: 'Button',
  disabled: true,
  onClick: () => {
    console.log('clicked!');
  },
};
