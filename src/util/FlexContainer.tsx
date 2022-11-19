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
  classNames,
  children,
}: {
  justifyContent?: alignmentType;
  alignItems?: alignmentType;
  flexFlow?: flexFlowType;
  wrap?: wrapType;
  classNames?: string;
  children?: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div
      className={`lilypad-flex-container ${classNames}`}
      style={{
        display: 'flex',
        justifyContent,
        alignItems,
        flexFlow,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;