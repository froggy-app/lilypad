import React, { PropsWithChildren } from "react";
import { alignmentType, wrapType } from "../util";
import "./Column.scss";

interface Props {
  justifyContent?: alignmentType;
  alignItems?: alignmentType;
  wrap?: wrapType;
  className?: string;
}

const Column = ({
  justifyContent = "initial",
  alignItems = "initial",
  wrap = "initial",
  className = "",
  children
}: PropsWithChildren<Props>) => {
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
