import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired,
  placeholder,
  customClass,
}) => {
  const fixedInputClass =
    'rounded-sm appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm';

  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  labelText: PropTypes.string,
  labelFor: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
  customClass: PropTypes.string,
};

Input.defaultProps = {
  handleChange: () => {},
  value: '',
  labelText: '',
  labelFor: '',
  id: '',
  name: '',
  type: '',
  isRequired: false,
  placeholder: '',
  customClass: '',
};
