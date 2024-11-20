import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import {Projects} from "./Projects"
import {Experience} from "./Experience"
import {About} from "./About"
import Home from "../src/Pages/Home"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 

  const handleClose = () => {
    setIsOpen(false); // Assuming you have setIsOpen to manage the dropdown state
  };

  // Function to handle scrolling within the Home page
  const handleScroll = (sectionId) => {

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } // if

  };

  const handleNavigation = (path, sectionId) => {
    if (location.pathname === "/") {
      // If on the Home page, scroll to the respective section
      if (sectionId) {
        handleScroll(sectionId);
      } else{
        handleScroll("#Hero"); // Scroll to top for "Home"
      }
    } 
    else {
      // If not on the Home page, navigate to Home and then scroll to section
      navigate(path);
      if (sectionId) {
        // Delay the scroll to allow navigation to complete
        setTimeout(() => handleScroll(sectionId), 100);
      }
    }

    handleClose(); // Close the menu after clicking
  };

  const navigateAbout = () => {
    navigate('/About');
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);

    setIsOpen(false); // Assuming you have setIsOpen to manage the dropdown state

  }
  
  return (
    <nav className="bg-white w-full h-20 z-50 fixed top-0 left-0 rounded-b-lg items-center">
      {/* Hamburger Icon */}
      <div className="absolute top-4 right-10 flex justify-items-center">
        <button
          onClick={toggleMenu}
          className="p-4 rounded-3xl w-16 transition-all hover:bg-white hover:text-black duration-500 ease-in-out items-center"
          style={{ boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)' }}
        >
          <div className='justify-items-center'>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute right-4 mt-14 bg-white text-black rounded-lg shadow-lg w-48 py-2 duration-500 transition-transform transform origin-top ${
          isOpen ? 'scale-y-100' : 'scale-y-0'
        }`}
        style={{ transformOrigin: 'top right' }}
      >
        <ul className="flex flex-col items-start font-semibold font-interTight">
          <li className="px-4 py-2 hover:text-gray-400 w-full">
            <button onClick={() => handleNavigation("/", "Hero")}>Home</button>
            <hr className="h-px my-1 border-0 dark:bg-gray-700" />
          </li>

          <li className="px-4 py-2 hover:text-gray-400 w-full">
          <button onClick={navigateAbout}>About</button>
            {/* <Link to="/About" onClick={handleClose}>About</Link> */}
            <hr className="h-px my-1 border-0 dark:bg-gray-700" />
          </li>

          <li className="px-4 py-2 hover:text-gray-400 w-full">
            <button onClick={() => handleNavigation("/", "Projects")}>Projects</button>
            <hr className="h-px my-1 border-0 dark:bg-gray-700" />
          </li>

          <li className="px-4 py-2 hover:text-gray-400 w-full">
            <button onClick={() => handleNavigation("/", "Experience")}>Experience</button>
            <hr className="h-px my-1 border-0 dark:bg-gray-700" />
          </li>

          <li className="px-4 py-2 hover:text-gray-400 w-full">
            <button onClick={() => handleNavigation("/", "Connect")}>Connect</button>
            <hr className="h-px my-1 border-0 dark:bg-gray-700" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

//   return (
//     // nav bar accross screen
//     <nav className="bg-white w-full h-20 z-50 fixed top-0 left-0 rounded-b-lg">
//       {/* Hamburger Icon */}
//       <div className="absolute top-4 right-10 justify-items-center flex">
//         <button
//           onClick={toggleMenu}
//           className="p-4 rounded-3xl w-16 transition-all duration-300 ease-in-out hover:bg-white hover:text-black"
//           style={{
//             boxShadow: '0 0 3px rgba(0, 0, 0, 0.2)', // Glowing white outline
//           }}
//         >
//           {/* Hamburger Lines */}
//           <div className='justify-items-center'>
//             <span className="block w-6 h-0.5 bg-black mb-1"></span>
//             <span className="block w-6 h-0.5 bg-black mb-1"></span>
//             <span className="block w-6 h-0.5 bg-black"></span>
//           </div>
//         </button>
//       </div>

//       {/* Dropdown Menu */}
//       <div
//         className={`absolute right-4 mt-14 bg-white text-black rounded-lg shadow-lg w-48 py-2 transition-transform transform origin-top ${
//           isOpen ? 'scale-y-100' : 'scale-y-0'
//         }`}
//         style={{ transformOrigin: 'top right' }} // Anchor the animation at the top-right
//         >

//         <ul className="flex flex-col items-start font-semibold font-interTight">

//           <li className="px-4 py-2 hover:text-gray-400 w-full">
//           <Link to="/" onClick={handleClose}>Home</Link>
//           {/* <a href="#Home">Home</a> */}
//             <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
//           </li>

//           <li className="px-4 py-2 hover:text-gray-400 w-full">
//           <Link to="/About" onClick={handleClose}>About</Link>
//             <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
//           </li>

//           <li className="px-4 py-2 hover:text-gray-400 w-full">
//             <a href="#Projects" onClick={handleClose}>Projects</a>
//             <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
//           </li>

//           <li className="px-4 py-2 hover:text-gray-400 w-full">
//             <a href="#Experience" onClick={handleClose}>Experience</a>
//             <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
//           </li>

//           <li className="px-4 py-2 hover:text-gray-400 w-full">
//             <a href="#Connect" onClick={handleClose}>Connect</a>
//             <hr class="h-px my-1 border-0 dark:bg-gray-700"></hr>
//           </li>

//         </ul>

//       </div>

//     </nav>
//   );
// };

// export default Navbar;