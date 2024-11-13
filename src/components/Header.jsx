import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // User icon for profile
import { IoIosLogOut } from 'react-icons/io';  // Log out icon

function Header() {
  return (
    <header className="bg-gradient-to-r from-black to-red-600 text-white">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Branding */}
        <Link to="/" className="text-3xl font-bold">
          Home<span className='text-2xl font-semibold'>-Store</span>
        </Link>

        

        {/* Navigation Icons */}
        <div className="flex items-center space-x-4">
          {/* Home Link */}
          <Link to="/" className="text-teal-100 hover:text-white">
            Home
          </Link>

          {/* User Profile Link */}
          <Link to={"/profile"} className="text-teal-100 hover:text-white">
            <FaUserCircle className="text-2xl" />
          </Link>

          {/* Logout Button */}
          <button className="bg-black text-white p-2 rounded-lg flex items-center">
            <IoIosLogOut className="mr-1" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
