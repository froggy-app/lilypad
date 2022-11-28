import React from 'react';
import {alignmentType, FlexContainer, wrapType} from '../util';

const Row = ({
  reverse,
  justifyContent = 'initial',
  alignItems = 'initial',
  wrap = 'initial',
  className,
  children,
}: {
  reverse?: boolean;
  justifyContent?: alignmentType;
  alignItems?: alignmentType;
  wrap?: wrapType;
  className?: string;
  children?: JSX.Element[] | JSX.Element;
}) => {
  return (
    <FlexContainer
      flexFlow={reverse ? 'row-reverse' : 'row'}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      className={`lilypad-row ${className}`}
    >
      {children}
    </FlexContainer>
  );
};

export default Row;
