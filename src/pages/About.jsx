import React from 'react';
import pic from "../assets/images/AUTOBook.png";
import about_bg from "../assets/images/AboutBanner.png";

export default function About() {
  return (
    <div className="">
      <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(${about_bg})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold">Welcome to AutoBook</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-1/3 mb-12 lg:mb-0">
            <img src={pic} alt="AutoBook Logo" className="rounded-full shadow-lg" />
          </div>

          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"></h2>
            <p className="text-gray-600 text-lg mb-6">
              At AutoBook, we are dedicated to providing you with the best car rental experience possible. Whether you're traveling for business or leisure, we offer a wide range of vehicles to suit your needs and preferences.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              Our fleet includes the latest models from top brands, ensuring that you drive in comfort and style. We prioritize safety and convenience, offering flexible rental terms and 24/7 customer support.
            </p>
            <div className="text-gray-600 text-md mb-6">
              <div className="flex items-center mb-4">
                <div className="h-5 w-5 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold"></div>
                <p className="ml-4">A diverse selection of well-maintained vehicles</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="h-5 w-5 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold"></div>
                <p className="ml-4">Competitive pricing and transparent terms</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="h-5 w-5 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold"></div>
                <p className="ml-4">Easy online booking and hassle-free pickup and return</p>
              </div>
              <div className="flex items-center mb-4">
                <div className="h-5 w-5 bg-blue-500 rounded-full flex justify-center items-center text-white font-bold"></div>
                <p className="ml-4">Exceptional customer service</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              We look forward to serving you and making your rental experience smooth and enjoyable. Drive with confidence and peace of mind with AutoBook.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com/AutoBook" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/AutoBook" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com/AutoBook" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com/company/AutoBook" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-700 transition">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
