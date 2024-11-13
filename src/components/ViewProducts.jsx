import React from 'react';
import Add from './Add';
import Edit from './Edit';

const ViewBooks = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-1/2">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4 flex-wrap">
        <h2 className="text-2xl font-bold text-red-600">Your Products</h2>
        <Add />
      </div>

      {/* Projects Section */}
      <div className="space-y-4">
        {/* Placeholder for a Project */}
        <div className="flex flex-wrap justify-between items-center bg-gray-50 p-4 rounded shadow-md">
          <h3 className="text-lg font-semibold text-gray-800">Product name</h3>
          <div className="flex flex-wrap items-center gap-4">
            {/* Edit Button */}
            <Edit></Edit>
            {/* GitHub Link */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="#github-link"
              className="text-gray-600 hover:text-red-600"
            >
            </a>
            {/* Delete Button */}
            <button className="text-red-600 hover:text-red-800">
              <i className="fa-solid fa-trash text-xl"></i>
            </button>
          </div>
        </div>

        {/* Repeat the above block for each project */}
      </div>
    </div>
  );
};

export default ViewBooks;
