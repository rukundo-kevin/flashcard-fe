import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ heading }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center" />
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{heading}</h2>
      <div className="spinner" />
    </div>
  );
};

Header.propTypes = {
  heading: PropTypes.string,

};

Header.defaultProps = {
  heading: '',
};
