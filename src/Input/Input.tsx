/**
 * An input component
 *
 * It is considered bad practice to set both the valid and invalid props to be true.
 * However, if you do, this component should only behave as invalid.
 */

import React, { useEffect, useState } from 'react';
import { FaCheck, FaExclamationCircle } from 'react-icons/fa';
import '../main.scss';
import './Input.scss';

type InputType = 'email' | 'password' | 'text' | 'number';

const ANIMATION_SPEED_MS = 250;

interface InputRule {
  label?: string;
  valid: (text: string) => boolean;
}

const Input = ({
  type = 'text',
  label,
  hint,
  placeholder,
  onChange: onChangeProp,
  onSubmit: onSubmitProp,
  valid: validProp = false,
  invalid: invalidProp = false,
  rules,
  className = '',
}: {
  type?: InputType;
  label?: string;
  hint?: string;
  placeholder?: string;
  onChange?: ({ value, valid }: { value: string; valid: boolean }) => void;
  onSubmit?: () => void;
  valid?: boolean;
  invalid?: boolean;
  rules?: InputRule[];
  className?: string;
}) => {
  const [value, setValue] = useState('');
  // Valid must be stateful, because we want it to remain the same (differ from the prop)
  // when we fade out.
  const [valid, setValid] = useState(false);
  const [fadeOutInProgress, setFadeOutInProgress] = useState(false);
  // useState instead of useRef because useRef doesn't trigger re-render
  const [iconDisplayed, setIconDisplayed] = useState(false);

  /**
   * Over-engineered fade out icon effect. If we are removing the icon, delay it's
   * deletion by ANIMATION_SPEED_MS to give time for the CSS fade out animation
   * to play.
   */
  useEffect(() => {
    if (!fadeOutInProgress) {
      // displayed represents the current state, iconDisplayed is prev state
      const displayed = validProp === true || invalidProp === true;
      // Check if icon is being removed, i.e. icon is currently being displayed and
      // we want to turn it off.
      const removingIcon = displayed === false && iconDisplayed === true;

      if (removingIcon) {
        setFadeOutInProgress(true);
      } else {
        setIconDisplayed(displayed);

        if (valid !== validProp) {
          setValid(validProp);
        }
      }
    } else {
      const timeout = setTimeout(() => {
        setIconDisplayed(false);
        setFadeOutInProgress(false);
      }, ANIMATION_SPEED_MS);

      return () => clearTimeout(timeout);
    }
  }, [validProp, invalidProp, iconDisplayed, valid, fadeOutInProgress]);

  const inputChanged = (e: any) => {
    const text = e.target.value;
    setValue(text);
    onChangeProp?.({ value: text, valid });
  };

  const onKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onSubmitProp?.();
    }
  };

  const getClassNames = () => {
    let classNames: string = `lilypad-input-field ${className}`;

    if (invalidProp) {
      classNames += ' lilypad-input-field-invalid';
    } else if (validProp) {
      classNames += ' lilypad-input-field-valid';
    }

    if (iconDisplayed) {
      classNames += ' lilypad-input-icon-showing';
    }

    return classNames;
  };

  const getIconClassNames = (validity: boolean, fadeOut: boolean = false) => {
    let classNames: string = `lilypad-input-icon lilypad-input-icon-${
      validity ? 'valid' : 'invalid'
    }`;

    if (fadeOutInProgress && fadeOut) {
      classNames += ' fade-out';
    }

    return classNames;
  };

  return (
    <div className={getClassNames()}>
      {label && label.length > 0 && (
        <p className="lilypad-input-label">{label}</p>
      )}

      <div className="lilypad-input-container">
        <input
          onChange={inputChanged}
          onKeyDown={onKeyDown}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          type={type}
          className="lilypad-input"
        />
        {iconDisplayed && (
          <div className="lilypad-input-icon-container">
            {invalidProp === true ? (
              <FaExclamationCircle className={getIconClassNames(false, true)} />
            ) : (
              <FaCheck className={getIconClassNames(true, true)} />
            )}
          </div>
        )}
      </div>
      {hint && hint.length > 0 && <p className="lilypad-input-hint">{hint}</p>}
      {rules && (
        <div className="lilypad-input-rule-list">
          {rules?.map(({ label, valid: rule }) => {
            const passes = rule(value);

            return (
              <div className="lilypad-input-rule-item">
                {passes ? (
                  <FaCheck className={getIconClassNames(true)} size={12} />
                ) : (
                  <FaExclamationCircle
                    className={getIconClassNames(false)}
                    size={12}
                  />
                )}
                <p
                  className={`lilypad-input-rule lilypad-input-rule-${
                    passes ? 'valid' : 'invalid'
                  }`}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Input;
