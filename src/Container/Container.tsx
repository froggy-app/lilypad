import React from 'react';
import {flexDirectionType} from '../util';

const Container = ({
  height = 'auto',
  width = 'auto',
  flexDirection = 'initial',
  className = '',
  children,
}: {
  height?: string;
  width?: string;
  flexDirection?: flexDirectionType;
  className?: string;
  children?: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div
      className={`lilypad-container ${className}`}
      style={{
        height,
        width,
        display: 'flex',
        flexDirection,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
