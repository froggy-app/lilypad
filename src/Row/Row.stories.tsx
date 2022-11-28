import Row from './Row';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/Row',
  component: Row,
} as ComponentMeta<typeof Row>;

const Box = ({backgroundColor}: {backgroundColor: string}) => (
  <div
    style={{height: '20px', width: '20px', backgroundColor, margin: '5px'}}
  ></div>
);

const Template: ComponentStory<typeof Row> = (args) => (
  <Row {...args}>
    <Box backgroundColor='red' />
    <Box backgroundColor='orange' />
    <Box backgroundColor='yellow' />
    <Box backgroundColor='green' />
    <Box backgroundColor='blue' />
    <Box backgroundColor='purple' />
  </Row>
);

export const RowDefault = Template.bind({});
RowDefault.args = {};

export const RowReverse = Template.bind({});
RowReverse.args = {
  reverse: true,
};
