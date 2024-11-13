import React from 'react';
import { Link } from 'react-router-dom';
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation Bar with Login and Signup Buttons */}
      <header className="bg-gradient-to-r from-black to-red-600 text-white py-4">
        <div className="max-w-8xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">
          Home<span className='text-2xl font-semibold'>-Store</span></h1>
          <div className="flex gap-x-6">
          <Link to={'/auth'} className="text-white hover:text-teal-200 mt-2 font-bold">
              Login
            </Link>
            {/* Sign Up Button */}
            <Link
              to={"/Register"}
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-red-100"
            > Signup         
               </Link>

          </div>
        </div>
      </header>

      {/* Parallax Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://eurotrend.co.za/wp-content/uploads/2021/05/Apricot-Wood-Grey-Tiles-2-2048x1152.jpg)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
          <h1 className="text-5xl text-black font-bold mb-6">Welcome to Home-Store</h1>
          <p className="text-lg text-black mb-8">
            Discover and purchase home appliances across various genres. Enjoy seamless and secured dealings.
          </p>
          
          <Link className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-500"       to={"/product"}
          >
            Start Purchasing
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-5xl font-semibold text-red-600 mb-10">Features</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-36">
          <div className="bg-teal-50 shadow-lg rounded-lg p-6 hover:bg-red-50">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Instant Access</h3>
            <p className="text-gray-700">Download and start purchasing products for your Home.</p>
          </div>
          <div className="bg-teal-50 shadow-lg rounded-lg p-6 hover:bg-red-50">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Wide Collection</h3>
            <p className="text-gray-700">Browse a vast collection for a Home in every genre you can think of.</p>
          </div>
          <div className="bg-teal-50 shadow-lg rounded-lg p-6 hover:bg-red-50">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Secure Dealings</h3>
            <p className="text-gray-700">Enjoy hassle-free, secure deals for a smooth shopping experience.</p>
          </div>
        </div>
      </section>

      {/* Parallax Book Collection Section */}
      <section className="relative py-16 bg-gray-100">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/e6258496495151.5eaff58cb3ea0.jpg)' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-black mb-8">Browse Our Collection</h2>
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-500">
            View
          </button>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; 2024 Home-Store. All rights reserved.</p>
      </footer>

    </div>
    
  );
};

export default LandingPage;
