import React from 'react';
import { Link } from 'react-router-dom';
import AuthImg from '../assets/login1.png';

const Auth = ({ insideRegister }) => {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='flex justify-center items-center bg-gradient-to-r from-gray-900 to-red-600'>
      <div className='container w-3/4 '>
        <div className='shadow-lg p-4 bg-gradient-to-r from-red-600 to-gray-900 rounded-lg'>
          <div className='flex items-center'>
            <div className='w-full lg:w-1/2 mr-3'>
              {/* You can uncomment and add an image if you want */}
              <img className='img-fluid' src={AuthImg} alt="Authentication" />
            </div>
            <div className='w-full lg:w-1/2'>
              <h1 className='mt-2 text-3xl font-bold text-red-600'>
                 Home-Store
              </h1>
              <h5 className='text-lg text-white'>
                Sign {insideRegister ? 'Up' : 'In'} to your Account
              </h5>

              <form>
                {insideRegister && 
                  <div className='mb-4'>
                    <label htmlFor="username" className="block text-white text-sm font-medium">Username</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>
                }

                <div className='mb-4'>
                  <label htmlFor="email" className="block text-white text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div className='mb-4'>
                  <label htmlFor="password" className="block text-white text-sm font-medium">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>

                {insideRegister ? 
                  <div className='mt-3'>
                    <button className='w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-500 focus:outline-none'>
                      Register
                    </button>
                    <p className='mt-3 text-sm text-white'>
                      Existing User?{' '}
                      <Link to={'/auth'} className='text-white hover:underline'>
                        Login
                      </Link>
                    </p>
                  </div>
                 : 
                  <div className='mt-3'>
                    <button className='w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-500 focus:outline-none'>
                      Login
                      {/* Uncomment below to show a loading spinner */}
                      {/* {isLogined && <Spinner className='ml-2' animation="border" variant="light" />} */}
                    </button>
                    <p className='mt-3 text-sm text-white'>
                      New User?{' '}
                      <Link to={'/register'} className='text-white hover:underline'>
                        Register
                      </Link>
                    </p>
                  </div>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
