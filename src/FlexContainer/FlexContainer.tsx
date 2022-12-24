import React from 'react';
import {alignmentType, flexDirectionType, wrapType} from '../util';

const FlexContainer = ({
  justifyContent = 'initial',
  alignItems = 'initial',
  flexDirection = 'initial',
  wrap = 'initial',
  height = 'auto',
  width = 'auto',
  className = '',
  children,
}: {
  justifyContent?: alignmentType;
  alignItems?: alignmentType;
  flexDirection?: flexDirectionType;
  wrap?: wrapType;
  height?: string;
  width?: string;
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
        height,
        width,
        flexWrap: wrap,
        overflow: 'auto',
      }}
    >
      {children}
    </div>
  );
};

export default FlexContainer;
