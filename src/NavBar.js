import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Projects} from "./Projects"
import {Experience} from "./Experience"
import {About} from "./About"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 

  return (
    // nav bar accross screen
    <nav className="bg-white w-full h-20 z-50 fixed top-0 left-0 rounded-b-lg">
      {/* Hamburger Icon */}
      <div className="absolute top-4 right-10 justify-items-center flex">
        <button
          onClick={toggleMenu}
          className="p-4 rounded-3xl w-16 h-12 text-white transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
          style={{
            boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)', // Glowing white outline
          }}
        >
          {/* Hamburger Lines */}
          <div className='justify-items-center'>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-4 mt-14 bg-white text-black rounded-lg shadow-lg w-48 py-2 transition-transform transform origin-top ${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
        style={{ transformOrigin: 'top right' }} // Anchor the animation at the top-right
      >
        <ul className="flex flex-col items-start font-semibold font-interTight">

          <li className="px-4 py-2 hover:bg-gray-300 w-full">
          <Link to="/About">About</Link>
            {/* <a href="#About">About</a> */}
            <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
          </li>

          <li className="px-4 py-2 hover:bg-gray-300 w-full">
            <Link to="/Projects">Projects</Link>
            {/* <a href="#Projects">Projects</a> */}
            <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
          </li>

          <li className="px-4 py-2 hover:bg-gray-300 w-full">
            <Link to="/Experience">Experience</Link>
            {/* <a href="#Experience">Experience</a> */}
            <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
          </li>

          <li className="px-4 py-2 hover:bg-gray-300 w-full">
            <Link to="/Connect">Connect</Link>
            {/* <a href="#Connect">Connect</a> */}
            <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;