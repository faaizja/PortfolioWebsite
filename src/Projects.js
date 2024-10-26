import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import pharmboticsImage from "../src/images/pharmabotics.svg";
import dbheroes from "../src/images/dbshooter.svg";

const Projects = () => {
  return (
    // entire projects section
    <section className="flex flex-col lg:px-24 px-6 mt-14">

      {/* Title */}
      <h1 className="lg:text-5xl text-3xl font-semibold text-black font-interTight lg:mb-10 mb-4">
        Selected Projects
      </h1>

      {/* Big containers for projects */}
      {/*each project = image + text beneath it  */}

      {/* PharmaBotics */}
      <div className="pb-11">
          
        <div className="justify-center items-center mt-2">

            <div className=" pt-10 overflow-hidden flex bg-gray-100 justify-center items-center lg:w-full lg:h-[34rem] h-52 rounded-3xl shadow-xl hover:bg-gray-300 hover:bg-opacity-60 ease-in-out duration-700">
              {/* image goes here */}
              <img src={pharmboticsImage}  alt="Pharmabotics" className='w-2/3 object-hidden transform lg:translate-y-20 hover:-translate-y-4 ease-in-out duration-500 hover:scale-105'></img>
            </div>

          <div className="lg:flex justify-between items-center mt-8">

            <div>
              <h1 className="font-interTight lg:text-2xl text-xl font-semibold">Pharmabotics</h1>
              <h2 className="font-interTight font-medium">Automated pill dispenser</h2>
            </div>

            <div className='pt-4'>
              <button className="bg-black text-white text-md py-4 px-8 rounded-full flex items-center group hover:bg-gray-400 ease-in-out duration-500">
                Check it out
                <FiArrowRight strokeWidth={3} size={20} className="ml-2 text-white transform group-hover:translate-x-2 transition-transform ease-in-out duration-500 "/>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Dragon Ball Heroes Shooter */}
      <div className="pb-11">
          
          <div className="justify-center items-center mt-2">
  
              <div className=" pt-10 overflow-hidden flex bg-gray-100 justify-center items-center lg:w-full lg:h-[34rem] h-52 rounded-3xl shadow-xl hover:bg-gray-300 hover:bg-opacity-60 ease-in-out duration-700">
                {/* image goes here */}
                <img src={dbheroes}  alt="dbheroes" className='w-2/3 object-hidden transform lg:translate-y-20 hover:-translate-y-4 ease-in-out duration-500 hover:scale-105'></img>
              </div>
  
            <div className="lg:flex justify-between items-center mt-8">
  
              <div>
                <h1 className="font-interTight lg:text-2xl text-xl font-semibold">Dragon Ball Heroes Shooter</h1>
                <h2 className="font-interTight font-medium">Player vs CPU shooter game</h2>
              </div>
  
              <div className='pt-4'>
                <button className="bg-black text-white text-md py-4 px-8 rounded-full flex items-center group hover:bg-gray-400 ease-in-out duration-500">
                  Check it out
                  <FiArrowRight strokeWidth={3} size={20} className="ml-2 text-white transform group-hover:translate-x-2 transition-transform ease-in-out duration-500 "/>
                </button>
              </div>
  
            </div>
  
          </div>
  
        </div>

      {/* end  */}
    </section> 
  );
}

export default Projects;