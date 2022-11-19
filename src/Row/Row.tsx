import React from 'react';
import {alignmentType, FlexContainer, wrapType} from '../util';

const Row = ({
  reverse,
  justifyContent = 'initial',
  alignItems = 'initial',
  wrap = 'initial',
  children,
}: {
  reverse: boolean;
  justifyContent?: alignmentType;
  alignItems?: alignmentType;
  wrap?: wrapType;
  children?: JSX.Element[] | JSX.Element;
}) => {
  return (
    <FlexContainer
      flexFlow={reverse ? 'row-reverse' : 'row'}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      classNames='lilypad-row'
    >
      {children}
    </FlexContainer>
  );
};

export default Row;