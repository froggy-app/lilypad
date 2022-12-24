import React from 'react';
import './Button.scss';
import '../main.scss';

const Button = ({
  label,
  className = '',
}: {
  label: String;
  className?: string;
}) => {
  return <button className={`lilypad-button ${className}`}>{label}</button>;
};

export default Button;
