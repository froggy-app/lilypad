import Row from '../src/Row/Row';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';
import {Container} from '../src/Container';

export default {
  title: 'lilypad/Row',
  component: Row,
} as ComponentMeta<typeof Row>;

const Template: ComponentStory<typeof Row> = (args) => (
  <Container height='400px' width='400px'>
    <Row {...args}>
      <div
        style={{
          height: '100px',
          width: '100px',
          backgroundColor: 'green',
          margin: '10px',
        }}
      />
      <div
        style={{
          height: '100px',
          width: '100px',
          backgroundColor: 'yellow',
          margin: '10px',
        }}
      />
    </Row>
  </Container>
);

export const RowSizingTest = Template.bind({});
RowSizingTest.args = {
  className: 'm-lg',
};
