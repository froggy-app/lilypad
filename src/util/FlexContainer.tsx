import React from 'react';

export type alignmentType =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial';
export type flexFlowType =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'
  | 'initial';
export type wrapType = 'wrap' | 'nowrap' | 'wrap-reverse' | 'initial';

const FlexContainer = ({
  justifyContent = 'initial',
  alignItems = 'initial',
  flexFlow = 'initial',
  wrap = 'initial',
  className,
  children,
}: {
  justifyContent?: alignmentType;
  alignItems?: alignmentType;
  flexFlow?: flexFlowType;
  wrap?: wrapType;
  className?: string;
  children?: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div
      className={`lilypad-flex-container ${className}`}
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexFlow,
        flexWrap: wrap,
        maxHeight: '100%',
        maxWidth: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
