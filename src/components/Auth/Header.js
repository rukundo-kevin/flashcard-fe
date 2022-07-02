import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ heading }) => {
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
  paragraph: PropTypes.string,
  linkName: PropTypes.string,
  linkUrl: PropTypes.string,
};

Header.defaultProps = {
  heading: '',
  paragraph: '',
  linkName: '',
  linkUrl: '#',
};

export default Header;
