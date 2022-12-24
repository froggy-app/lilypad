import Row from './Row';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';

export default {
  title: 'lilypad/Row',
  component: Row,
} as ComponentMeta<typeof Row>;

const Box = ({backgroundColor}: {backgroundColor: string}) => (
  <div
    style={{height: '100%', width: '100%', backgroundColor, margin: '5px'}}
  ></div>
);

const Template: ComponentStory<typeof Row> = (args) => (
  <div
    style={{
      width: '300px',
      height: '400px',
      backgroundColor: 'red',
    }}
  >
    <Row {...args}>
      <Box backgroundColor='blue' />
    </Row>
  </div>
);

export const RowSizingTest = Template.bind({});
RowSizingTest.args = {
  className: 'm-lg',
};
