import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
 
        <footer className="bg-gradient-to-r from-black to-red-600 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              {/* About Section */}
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Home<span className='text-2xl font-semibold'>-Store</span></h2>
                <p className="text-lg text-white">An online platform for your dream home products.</p>
              </div>
    
              {/* Links Section */}
              <div className="flex flex-col lg:flex-row justify-center gap-8 mb-6 lg:mb-0">
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-white">
                    <li><Link to="/" className="hover:text-white">Home</Link></li>
                    <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
                    <li><Link to="/about" className="hover:text-white">About</Link></li>
                    <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                  </ul>
                </div>
    
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
                  <ul className="space-y-2 text-white">
                    <li><Link to="/faq" >FAQ</Link></li>
                    <li><Link to="/help" >Help Center</Link></li>
                    <li><Link to="/terms" >Terms & Conditions</Link></li>
                    <li><Link to="/privacy" >Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
    
              {/* Social Media Icons */}
              <div className="flex justify-center gap-4 mb-6 lg:mb-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
    
            {/* Copyright Section */}
            <div className="text-center mt-8 border-t border-white pt-4">
              <p className="text-white text-sm">
                &copy; {new Date().getFullYear()} Home-Store. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
   
 )
}

export default Footer