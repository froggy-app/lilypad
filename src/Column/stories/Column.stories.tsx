import Column from '../Column';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';
import '../../main.scss';
import './story.scss';
import {Container} from '../../Container';
import {Row} from '../../Row';

export default {
  title: 'lilypad/Column',
  component: Column,
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => (
  <Container height='400px' width='400px'>
    <Row>
      <Column {...args}>
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
      </Column>
    </Row>
  </Container>
);

export const ColumnSizingTest = Template.bind({});
ColumnSizingTest.args = {
  className: 'm-lg',
};
