import React, { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const navigateConnect = () => {
    navigate('/About');
  };

  // Array of aspirations
  const aspirations = [
    'software engineer.',
    'chef.',
    "football fan",
    'game developer.',
    "teacher.",
  ];

  // State to keep track of the current aspiration and fade effect
  const [currentAspiration, setCurrentAspiration] = useState(0);
  const [fade, setFade] = useState(true);

  // Update aspiration every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Remove fade effect briefly
      setTimeout(() => {
        setCurrentAspiration((prevAspiration) => (prevAspiration + 1) % aspirations.length);
        setFade(true); // Add fade effect when new text is displayed
      }, 100); // Small delay to trigger re-animation
    }, 4000);

    return () => clearInterval(interval);
  }, [aspirations.length]);  

  return ( 
    <section id="Home" className='h-screen py-24 flex flex-col lg:px-24 p-5'>
      
      <div className='flex flex-col items-start'>
        <h2 className='lg:text-8xl text-7xl font-bold text-black font-interTight'>
          Computer science student and aspiring
        </h2>

        <h2 className={`text-gray-400 lg:text-8xl text-7xl font-bold font-interTight ${fade ? 'fadeIn' : ''}`}>
          {aspirations[currentAspiration]}
        </h2>
      </div>

      <h2 className='mt-6 ml-1 font-interTight font-semibold lg:text-4xl text-2xl'>
        Hi! I'm Faaiz.
      </h2>

      <button 
        onClick={navigateConnect} 
        className="w-max flex flex-row items-center gap-4 lg:mt-32 mt-16 px-9 py-5 text-white bg-black text-lg font-medium rounded-full group hover:bg-gray-400 ease-in-out duration-500"
      >
        About me 
        <FiArrowRight strokeWidth={3} size={20} className="text-white transform group-hover:translate-x-2 transition-transform ease-in-out duration-500" />
      </button>

      <div className='mt-3 pl-3 flex flex-row justify-start opacity-30'>
        <h2 className='font-interTight font-semibold'>Scroll down to see more</h2>
        <FaArrowDown strokeWidth={4} size={23} className='arrowAnimation ml-2'/>
      </div>

    </section>
  );
}

export default Hero;
