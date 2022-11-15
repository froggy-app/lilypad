import React, {useEffect, useState} from 'react';
import './Input.scss';
import '../../lilypad.scss';
import {FaCheck, FaExclamationCircle} from 'react-icons/fa';

type InputType = 'email' | 'password' | 'text' | 'number';

const allowedInputDefault = (value: string) => true;
const allowedInputNumber = (value: string) =>
  /^\d+(\.\d{0,6})?$/.test(value) || value.length == 0;
const allowedInputPassword = (value: string) =>
  /^(?=.*[a-zA-Z0-9!@#\$%\^&\*])/.test(value) || value.length == 0;
const allowedInputEmail = (value: string) =>
  /^(?=.*[a-zA-Z0-9@.])/.test(value) || value.length == 0;

/*
This allowedInput methods are different than the isValid methods. This is
because certain things must be allowed to be inputted, but may be invalid
once the user submits. For example, the input "12." must be allowed in a
number input, because the user must be able to enter a decimal point. This
example is allowed input, but not valid, because "12." is not a valid number;
a number must follow a decimal point.
*/

const isValidDefault = (value: string) => true;
const isValidNumber = (value: string) => /^\d+(\.\d{1,6})?$/.test(value);
/*
Password rules:
- Atleast 1 lowercase
- Atleast 1 uppercase
- Atleast one special symbol (!@#\$%\^&\*])
- Length between 12 and 64
*/
const isValidPassword = (value: string) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,64}$)/.test(
    value
  );

const isValidEmail = (value: string) =>
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);

const ANIMATION_SPEED_MS = 250;

const Input = ({
  type = 'text',
  label,
  hint,
  placeholder,
  onChange: onChangeProp,
  onSubmit: onSubmitProp,
  valid: validProp = false,
  invalid: invalidProp = false,
}: {
  type?: InputType;
  label?: string;
  hint?: string;
  placeholder?: string;
  onChange?: ({value, valid}: {value: string; valid: boolean}) => void;
  onSubmit?: () => void;
  valid: boolean;
  invalid: boolean;
}) => {
  const [value, setValue] = useState('');
  const [valid, setValid] = useState(false);
  const [isRemovingIcon, setIsRemovingIcon] = useState(false);
  const [iconDisplayed, setIconDisplayed] = useState(false);

  /**
   * Over-engineered fade out icon effect
   */
  useEffect(() => {
    if (!isRemovingIcon) {
      const displayed = validProp === true || invalidProp === true;
      const removingIcon = displayed === false && iconDisplayed === true;

      let timeout = setTimeout(
        () => {
          setIconDisplayed(displayed);
          setIsRemovingIcon(false);
        },
        removingIcon ? ANIMATION_SPEED_MS : 0
      );

      if (removingIcon) {
        setIsRemovingIcon(true);
      } else if (valid !== validProp) {
        setValid(validProp);
      }

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [validProp, invalidProp, iconDisplayed]);

  console.log(iconDisplayed);

  //const iconDisplayed = validProp === true || invalidProp === true;

  let allowedInput: (value: string) => boolean;
  let isValid: (value: string) => boolean;

  switch (type) {
    case 'number':
      isValid = isValidNumber;
      allowedInput = allowedInputNumber;
      break;
    case 'password':
      isValid = isValidPassword;
      allowedInput = allowedInputPassword;
      break;
    case 'email':
      isValid = isValidEmail;
      allowedInput = allowedInputEmail;
      break;
    default:
      isValid = isValidDefault;
      allowedInput = allowedInputDefault;
      break;
  }

  const inputChanged = (e: any) => {
    const text = e.target.value;
    const valid = isValid(text);

    if (allowedInput(text)) {
      setValue(text);
      onChangeProp?.({value: text, valid});
    }
  };

  const onKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      onSubmitProp?.();
    }
  };

  const getClassNames = () => {
    let classNames: string = 'lilypad-input-field';

    if (invalidProp) {
      classNames += ' lilypad-input-field-invalid';
    }

    if (validProp) {
      classNames += ' lilypad-input-field-valid';
    }

    if (iconDisplayed) {
      classNames += ' lilypad-input-icon-showing';
    }

    return classNames;
  };

  const getIconClassNames = (validity: boolean) => {
    let classNames: string = `lilypad-input-icon lilypad-input-icon-${
      validity ? 'valid' : 'invalid'
    }`;

    if (isRemovingIcon) {
      classNames += ' fade-out';
    }

    return classNames;
  };

  return (
    <div className={getClassNames()}>
      {label && label.length > 0 && (
        <p className='lilypad-input-label'>{label}</p>
      )}

      <div className='lilypad-input-container'>
        <input
          onChange={inputChanged}
          onKeyPress={onKeyPress}
          value={value}
          placeholder={placeholder}
          autoComplete='off'
          type={type === 'password' ? 'password' : 'text'}
          className='lilypad-input'
        />
        {iconDisplayed && (
          <div className='lilypad-input-icon-container'>
            {valid === true ? (
              <FaCheck className={getIconClassNames(true)} />
            ) : (
              <FaExclamationCircle className={getIconClassNames(false)} />
            )}
          </div>
        )}
      </div>
      {hint && hint.length > 0 && <p className='lilypad-input-hint'>{hint}</p>}
    </div>
  );
};

export default Input;
