import Input from './Input';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  return (
    <div style={{width: '300px'}}>
      <Input {...args} />
    </div>
  );
};

export const InputDefault = Template.bind({});
InputDefault.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  hint: 'Hint text here',
};

export const InputNumber = Template.bind({});
InputNumber.args = {
  type: 'number',
};

export const InputPassword = Template.bind({});
InputPassword.args = {
  type: 'password',
};

export const InputEmail = Template.bind({});
InputEmail.args = {
  type: 'email',
};
