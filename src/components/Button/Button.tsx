import React from 'react';
import './Button.scss';
import '../../lilypad.scss';

const Button = ({label}: {label: String}) => {
  return <button className='lilypad-button'>{label}</button>;
};

export default Button;
