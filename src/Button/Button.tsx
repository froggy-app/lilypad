import React from 'react';
import './Button.scss';
import '../main.scss';

interface Props {
  label: String;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({
  label,
  onClick: onClickProp = () => {},
  disabled = false,
  className = '',
}: Props) => {
  const getClassNames = () => {
    let classNames: string = `lilypad-button ${className}`;

    if (disabled) {
      classNames += 'lilypad-button-disabled';
    }

    return classNames;
  };

  const onClick = () => {
    if (!disabled) {
      onClickProp();
    }
  };

  return (
    <button className={getClassNames()} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
