import React from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = ({handleLogout}) => {
  return (
    <>
    <div className="w-full h-fit bg-gray-900 backdrop-blur-md flex justify-between p-7 " data-testid="header">
      <div className="w-max text-white">
        <p className="text-x">
          <span className="text-2xl t">FLASHCARD APP </span>
        </p>
      </div>
      <div className="flex list-none w-1/2 justify-flexStart items-center text-white cursor-pointer ">
        <li className="px-4">
          <Link to="create" className="hover:text-blue-200 transition duration-300">
            Create New Card
          </Link>
        </li>
        <li className="px-60">
          <Link to="viewCards" className="hover:text-blue-200 transition duration-300">
            View Cards
          </Link>
        </li>
      </div>
      <div className="flex list-none justify-evenly items-center">
        <li>
          <button
          onClick={handleLogout}
            className="text-white  border border-solid border-white rounded py-2.5 px-5 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors duration-200"
          >
            Sign Out
          </button>
        </li>
      </div>
    </div>
    </>
  );
};

export default LandingHeader;
