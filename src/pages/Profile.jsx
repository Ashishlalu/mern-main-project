import React, { useState } from 'react';
import ViewProducts from '../components/ViewProducts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    username: "Ashish",
    email: "Ashish@gmail.com",
    gender: "Male",
  });

  const handleUpdateProfile = () => {
    // Your update logic here
    alert("Profile updated successfully!");
  };
  const [purchasedProducts, setpurchasedProducts] = useState([
    { id: 1, title: "product Title ", author: "Author 1", genre: "Fiction" },
    // Add more products as needed
  ]);


  return (
    <div className="min-h-screen text-gray-800">
      <Header/>
      {/* Left Section: Profile Details */}
      <div className=" flex flex-col items-center justify-center p-8 bg-white shadow-lg flex-wrap">
        <div className="w-52 h-52 bg-red-200 rounded-circle overflow-hidden shadow-md">
          <img
            src="https://www.alumni.upenn.edu/s/1587/images/gid2/editor/communications/staff_photos/vacant_photo.jpg"
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold mt-4 text-red-700">{userDetails.username}</h3>

        {/* Editable Profile Details */}
        <div className="w-50 mt-6">
          <div className="mb-2 w-full">
            <input
              type="text"
              value={userDetails.username}
              onChange={e => setUserDetails({ ...userDetails, username: e.target.value })}
              placeholder="Username"
              className="form-control"
            />
          </div>
          <div className="mb-2 w-full">
            <input
              type="email"
              value={userDetails.email}
              onChange={e => setUserDetails({ ...userDetails, email: e.target.value })}
              placeholder="Email"
              className="form-control"
            />
          </div>
          <div className="mb-2 w-full">
            <input
              type="text"
              value={userDetails.gender}
              onChange={e => setUserDetails({ ...userDetails, gender: e.target.value })}
              placeholder="Gender"
              className="form-control"
            />
          </div>
          <div className="d-grid w-full ">
            <button className="btn btn-danger" onClick={handleUpdateProfile}>
              Update User
            </button>
          </div>
        </div>
      </div>

      {/* Right Section: Viewproducts */}
      <div className=" p-8 bg-red-50 shadow-lg text-center">
        <div className='flex justify-center items-center'><ViewProducts /></div>
        {/* Purchased products Section */}
        <div className="mt-8 w-full">
          <h3 className="text-xl font-semibold mb-4">Purchased Products</h3>
          <div className="space-x-4 flex justify-center items-center">
            {purchasedProducts.length === 0 ? (
              <p className="text-gray-600">No Products purchased yet.</p>
            ) : (
              purchasedProducts.map((product) => (
                <div key={product.id} className="w-1/4 p-4 bg-red-50 rounded-lg shadow-sm">
                  <div className='w-full'>
                    <img
                      src="https://i.pinimg.com/originals/a0/fb/fe/a0fbfe42acd3f9d505ddab47e5153bca.jpg"
                      alt="Product Cover"
                      className="w-full h-64 rounded-md"
                    />
                    <h1 className="text-lg text-center">{product.title}</h1>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;


