import React from 'react';

const FormExtra = ({linkText, linkUrl}) => {
  return (
    <div className="flex items-center justify-between ">
      <div className="text-sm">
        <a href={linkUrl} className="font-medium text-blue-600 hover:text-blue-500">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default FormExtra;
