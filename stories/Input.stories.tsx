import Input from '../src/Input/Input';
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
  label: 'Enter password',
  hint: 'Password must contain:',
  rules: [
    {
      label: 'An uppercase character',
      valid: (text: string) => /^(?=.*[A-Z])/.test(text),
    },
    {
      label: 'A lowercase character',
      valid: (text: string) => /^(?=.*[a-z])/.test(text),
    },
    {
      label: 'A number',
      valid: (text: string) => /^(?=.*[0-9])/.test(text),
    },
    {
      label: 'A special symbol (!@#$%^&*])',
      valid: (text: string) => /^(?=.*[!@#\$%\^&\*])/.test(text),
    },
    {
      label: '12 to 64 characters',
      valid: (text: string) => text.length >= 12 && text.length <= 64,
    },
  ],
};

export const InputEmail = Template.bind({});
InputEmail.args = {
  type: 'email',
};
