import React from 'react';
import {alignmentType, wrapType} from '../util';
import './Column.scss';

const Column = ({
  reverse,
  justifyContent = 'initial',
  alignItems = 'initial',
  wrap = 'initial',
  className = '',
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
    <div
      className={`lilypad-column ${className}`}
      style={{
        justifyContent,
        alignItems,
        flexWrap: wrap,
      }}
    >
      {children}
    </div>
  );
};

export default Column;
