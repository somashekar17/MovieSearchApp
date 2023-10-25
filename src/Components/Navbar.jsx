//import React from 'react'
import movImage from '../assets/movie.avif';

function Navbar() {
  return (
    <div className="z-20 flex-wrap items-center justify-between px-4 main lg:flex md:flex bg-[#40407a] py-4 shadow-md sticky top-0">
      <div className="flex items-center space-x-3 left">
        <img className="w-10 " src={movImage} />
        <h2 className="text-2xl font-bold text-center text-white logo">
          MovieSearch
        </h2>
      </div>
      
      <div className="right">
        <ul className="flex justify-center space-x-4 text-white">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
