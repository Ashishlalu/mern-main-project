import React from 'react';
import Header from './Header';
import ProductModal from './ProductModal';

const ProductCard = () => {
  return (
    <>
      <div style={{ paddingTop: '10px' }} className="flex justify-center items-center px-5">
        <div className="max-w-md w-full bg-red-100 text-gray-200 rounded-lg shadow-lg overflow-hidden">
          {/* Image Container */}
          <div className="bg-red-100 p-4">
            <img
              src="https://i.pinimg.com/originals/a0/fb/fe/a0fbfe42acd3f9d505ddab47e5153bca.jpg"
              alt="Product Cover"
              className="w-full h-auto rounded-md"
            />
          </div>

          {/* Book Details */}
          <div className="p-6 text-center">
            {/* Book Title */}
            <h1 className="text-2xl font-bold text-black mb-3">Product Title</h1>

            {/* Pricing */}
            <h3 className='text-black text-lg'>Rs.2,500</h3>

            {/* Buy Now Button */}
              <ProductModal></ProductModal> 
            
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
