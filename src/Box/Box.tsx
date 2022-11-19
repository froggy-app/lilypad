import React from 'react';

const Box = ({
  pl = '0px',
  pr = '0px',
  pt = '0px',
  pb = '0px',
  px,
  py,
  ml = '0px',
  mr = '0px',
  mt = '0px',
  mb = '0px',
  mx,
  my,
  h = '0px',
  w = '0px',
  children,
}: {
  pl?: string;
  pr?: string;
  pt?: string;
  pb?: string;
  px?: string;
  py?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
  mx?: string;
  my?: string;
  h?: string;
  w?: string;
  children?: JSX.Element[] | JSX.Element;
}) => {
  if (px) {
    pl = px;
    pr = px;
  }

  if (py) {
    pt = py;
    pb = py;
  } else {
  }

  if (mx) {
    ml = mx;
    mr = mx;
  }

  if (my) {
    mt = my;
    mb = my;
  }

  return (
    <div
      style={{
        padding: `${pt} ${pr} ${pb} ${pl}`,
        margin: `${mt} ${mr} ${mb} ${ml}`,
        height: h,
        width: w,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
