import React, { PropsWithChildren } from "react";

interface Props {
  height?: string;
  width?: string;
  className?: string;
}

const Container = ({
  height = "auto",
  width = "auto",
  className = "",
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`lilypad-container ${className}`}
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
