import React, {useState} from 'react';
import './Input.scss';
import '../../lilypad.scss';

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

const Input = ({
  type = 'text',
  label,
  hint,
  placeholder,
  onChange: onChangeProp,
  onSubmit: onSubmitProp,
  valid: validProp = true,
  invalid: invalidProp = false,
}: {
  type?: InputType;
  label?: string;
  hint?: string;
  placeholder?: string;
  onChange?: ({value, valid}: {value: string; valid: boolean}) => void;
  onSubmit?: () => void;
  valid?: boolean;
  invalid?: boolean;
}) => {
  const [value, setValue] = useState('');

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

    if (!validProp || invalidProp) {
      classNames += ' lilypad-input-field-invalid';
    }

    if (validProp) {
      classNames += ' lilypad-input-field-valid';
    }

    return classNames;
  };

  return (
    <div className={getClassNames()}>
      {label && label.length > 0 && (
        <p className='lilypad-input-label'>{label}</p>
      )}
      <input
        onChange={inputChanged}
        onKeyPress={onKeyPress}
        value={value}
        placeholder={placeholder}
        autoComplete='off'
        type={type === 'password' ? 'password' : 'text'}
        className='lilypad-input'
      />
      {hint && hint.length > 0 && <p className='lilypad-input-hint'>{hint}</p>}
    </div>
  );
};

export default Input;
