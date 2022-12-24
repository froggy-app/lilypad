import React from 'react';

export type alignmentType =
  | 'center'
  | 'start'
  | 'end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'initial';
export type flexDirectionType =
  | 'column'
  | 'column-reverse'
  | 'row'
  | 'row-reverse'
  | 'initial';
export type wrapType = 'wrap' | 'nowrap' | 'wrap-reverse' | 'initial';

const FlexContainer = ({
  justifyContent = 'initial',
  alignItems = 'initial',
  flexDirection = 'initial',
  wrap = 'initial',
  className = '',
  children,
}: {
  justifyContent?: alignmentType;
  alignItems?: alignmentType;
  flexDirection?: flexDirectionType;
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
        flexDirection,
        flexWrap: wrap,
        overflow: 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
