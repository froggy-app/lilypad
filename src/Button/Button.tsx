import React from 'react';
import './Button.scss';
import '../main.scss';

const Button = ({
  label,
  onClick = () => {},
  className = '',
}: {
  label: String;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button className={`lilypad-button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
