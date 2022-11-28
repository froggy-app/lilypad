import React from 'react';

const Container = ({
  height = 'auto',
  width = 'auto',
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
      className={className}
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
