import React from 'react';
import {alignmentType, wrapType} from '../util';
import './Row.scss';

const Row = ({
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
    <div className='lilypad-row-container'>
      <div
        className={`lilypad-row ${className}`}
        style={{
          justifyContent,
          alignItems,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Row;
