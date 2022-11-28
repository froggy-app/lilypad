import React from 'react';
import {alignmentType, FlexContainer, wrapType} from '../util';

const Column = ({
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
      flexFlow={reverse ? 'column-reverse' : 'column'}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      className={`lilypad-column ${className}`}
    >
      {children}
    </FlexContainer>
  );
};

export default Column;
