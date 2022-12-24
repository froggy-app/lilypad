import Column from '../Column';
import {FlexContainer} from '../../FlexContainer';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';
import '../../main.scss';
import './story.scss';

export default {
  title: 'lilypad/Column',
  component: Column,
} as ComponentMeta<typeof Column>;

const Template: ComponentStory<typeof Column> = (args) => (
  <FlexContainer height='400px' width='400px'>
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
  </FlexContainer>
);

export const ColumnSizingTest = Template.bind({});
ColumnSizingTest.args = {
  className: 'm-lg',
};
