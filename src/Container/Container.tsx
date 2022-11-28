import React from 'react';

const Container = ({
  height = '0px',
  width = '0px',
  className,
  children,
}: {
  height?: string;
  width?: string;
  className?: string;
  children?: JSX.Element[] | JSX.Element;
}) => {
  return (
    <div
      className={`p-xs mx-md ${className}`}
      style={{
        height,
        width,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
