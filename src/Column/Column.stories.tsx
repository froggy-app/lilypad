import Column from './Column';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';
import '../main.scss';

export default {
  title: 'lilypad/Column',
  component: Column,
} as ComponentMeta<typeof Column>;

const Box = ({backgroundColor}: {backgroundColor: string}) => (
  <div style={{height: '100%', width: '100%', backgroundColor}}></div>
);

const Template: ComponentStory<typeof Column> = (args) => (
  <div
    style={{
      width: '300px',
      height: '400px',
      backgroundColor: 'red',
    }}
  >
    <Column {...args}>
      <Box backgroundColor='blue' />
    </Column>
  </div>
);

export const ColumnSizingTest = Template.bind({});
ColumnSizingTest.args = {
  className: 'm-lg',
};
