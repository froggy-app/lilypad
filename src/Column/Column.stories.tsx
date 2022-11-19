import Column from './Column';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/Column',
  component: Column,
} as ComponentMeta<typeof Column>;

const Box = ({backgroundColor}: {backgroundColor: string}) => (
  <div
    style={{height: '20px', width: '20px', backgroundColor, padding: '5px'}}
  ></div>
);

const Template: ComponentStory<typeof Column> = (args) => (
  <Column {...args}>
    <Box backgroundColor='red' />
    <Box backgroundColor='orange' />
    <Box backgroundColor='yellow' />
    <Box backgroundColor='green' />
    <Box backgroundColor='blue' />
    <Box backgroundColor='purple' />
  </Column>
);

export const ColumnDefault = Template.bind({});
ColumnDefault.args = {};

export const ColumnReverse = Template.bind({});
ColumnReverse.args = {
  reverse: true,
};
