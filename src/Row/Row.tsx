import React, { PropsWithChildren } from "react";
import { alignmentType, wrapType } from "../util";
import "./Row.scss";

interface Props {
  justifyContent?: alignmentType;
  alignItems?: alignmentType;
  wrap?: wrapType;
  className?: string;
}

const Row = ({
  justifyContent = "initial",
  alignItems = "initial",
  wrap = "initial",
  className = "",
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div
      className={`lilypad-row ${className}`}
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

export default Row;
