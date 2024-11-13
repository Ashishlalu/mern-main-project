import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Product = () => {
 
    
    function ProductPage() {
        const [Products, setProducts] = useState([]);
        const [loading, setLoading] = useState(true);
        useEffect(() => {
          // Fetch Products from the API
          axios
            .get('http://localhost:5555/Products') // Replace with your API endpoint
            .then((response) => {
              setProducts(response.data);
              setLoading(false);
            })
            .catch((error) => {
              console.error('Error fetching Products:', error);
              setLoading(false);
            });
        }, []);
    }  
  
    
      return (
        <div className="min-h-screen bg-gray-100  ">
          {/* Header Section */}
          <Header/>
          
          <div className="flex justify-start items-center mb-8 mt-8">
            <h1 className="text-3xl font-bold text-red-600">Available Products</h1>
            {/* Search Bar */}
            <div className="flex items-center w-1/3 mx-64">
              <input
                type="text"
                placeholder="Search Products..."
                className="w-full p-2 rounded-lg bg-red-100 text-black placeholder-gray-800 focus:outline-red-600"
                />
            </div>
            
          </div>
    
          {/* Products Grid */}
          {/* {loading ?  */}
            {/* <div className="flex justify-center items-center h-64">
              <p className="text-lg text-gray-500">Loading Products...</p>
            </div> */}
           {/* :  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard></ProductCard>
            </div>
          {/* } */}
          <Footer></Footer>
        </div>
      );
    }
    
   
export default Product