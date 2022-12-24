import {ComponentStory, ComponentMeta} from '@storybook/react';
import React from 'react';
import {Column} from '../../Column';
import FlexContainer from '../FlexContainer';
import '../../main.scss';

export default {
  title: 'lilypad/FlexContainer',
  component: FlexContainer,
} as ComponentMeta<typeof FlexContainer>;

const Template: ComponentStory<typeof FlexContainer> = (args) => (
  <FlexContainer
    height='400px'
    width='400px'
    justifyContent='center'
    alignItems='center'
  >
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
  </FlexContainer>
);

export const FlexContainerCenter = Template.bind({});
FlexContainerCenter.args = {
  className: 'm-lg',
};
