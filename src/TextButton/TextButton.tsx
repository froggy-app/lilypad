import React from 'react';
import './TextButton.scss';
import '../main.scss';

interface Props {
  label: String;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const TextButton = ({
  label,
  onClick,
  disabled = false,
  className = '',
}: Props) => {
  const getClassNames = () => {
    let classNames: string = `lilypad-button ${className}`;
    return classNames;
  };

  return (
    <button className={getClassNames()} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default TextButton;
