import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import pharmboticsImage from "../src/images/pharmabotics.svg";
import dbheroes from "../src/images/dbshooter.svg";
import { useNavigate } from 'react-router-dom';
import studySpotrImage from "./images/studySpotrMockups.png"
import chatbotImage from "../src/images/Football-Wizard-Image.png"

const Projects = () => {

  const navigate = useNavigate();

  const navigateConnect = () => {
    navigate('/StudySpotr');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
  }, 0);
  };

  const navigateConnect2 = () => {
    navigate('/Pharmabotics');
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
  }, 0);
  };

  const navigateConnect3 = () => {
    // navigate('/DbHeroes');
    window.open("https://github.com/faaizja/Dragon-Ball-Z-Heroes-shooter-game")
  };

  const navigateConnect4 = () => {
    navigate('/FootballWizard');
    
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
  }, 0);
  };


  return (
    // entire projects section
    <section id="Projects" className="flex flex-col lg:px-24 px-6 lg:mt-20 mt-52">

      {/* Title */}
      <h1 className="lg:text-5xl text-3xl font-semibold text-black font-interTight lg:mb-10 mb-4">
        Selected <span className='text-gray-400 fadeIn'>projects</span>
      </h1>

      {/* Big containers for projects */}
      {/*each project = image + text beneath it  */}

    {/* Football Wizard */}
    <div className="pb-11">
          
          <div className="justify-center items-center mt-2">
  
            <div className='justify-items-center'>
              <div className=" pt-10 overflow-hidden flex bg-gray-100 justify-center items-center lg:w-11/12 lg:h-[32rem] h-52 rounded-[4rem] shadow-xl hover:bg-gray-300 hover:bg-opacity-60 ease-in-out duration-700">
                {/* image goes here */}
                <img src={chatbotImage}  alt="studyspotr" className='w-2/3 object-hidden transform lg:translate-y-20 hover:-translate-y-4 ease-in-out duration-500 hover:scale-105'></img>
              </div>
            </div>
  
            <div className="lg:flex justify-between items-center mt-8">
  
              <div>
                <h1 className="font-interTight lg:text-2xl text-xl font-semibold lg:ml-16">Football Wizard </h1>
                <h2 className="font-interTight font-medium lg:ml-16">AI chatbot</h2>
              </div>
  
              <div className='pt-4'>
                <button onClick={navigateConnect4} className="lg:mr-16 bg-black text-white text-md py-4 px-8 rounded-full flex items-center group hover:bg-gray-400 ease-in-out duration-500">
                  Check it out
                  <FiArrowRight strokeWidth={3} size={20} className="ml-2 text-white transform group-hover:translate-x-2 transition-transform ease-in-out duration-500 "/>
                </button>
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      {/* Study Spotr */}
      <div className="pb-11">
          
        <div className="justify-center items-center mt-2">

          <div className='justify-items-center'>
            <div className=" pt-10 overflow-hidden flex bg-gray-100 justify-center items-center lg:w-11/12 lg:h-[32rem] h-52 rounded-[4rem] shadow-xl hover:bg-gray-300 hover:bg-opacity-60 ease-in-out duration-700">
              {/* image goes here */}
              <img src={studySpotrImage}  alt="studyspotr" className='w-2/3 object-hidden transform lg:translate-y-20 hover:-translate-y-4 ease-in-out duration-500 hover:scale-105'></img>
            </div>
          </div>

          <div className="lg:flex justify-between items-center mt-8">

            <div>
              <h1 className="font-interTight lg:text-2xl text-xl font-semibold lg:ml-16">Study Spotr</h1>
              <h2 className="font-interTight font-medium lg:ml-16">Full stack web-app</h2>
            </div>

            <div className='pt-4'>
              <button onClick={navigateConnect} className="lg:mr-16 bg-black text-white text-md py-4 px-8 rounded-full flex items-center group hover:bg-gray-400 ease-in-out duration-500">
                Check it out
                <FiArrowRight strokeWidth={3} size={20} className="ml-2 text-white transform group-hover:translate-x-2 transition-transform ease-in-out duration-500 "/>
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* PharmaBotics */}
      <div className="pb-11">
          
        <div className="justify-center items-center mt-2">

          <div className='justify-items-center'>
            <div className=" pt-10 overflow-hidden flex bg-gray-100 justify-center items-center lg:w-11/12 lg:h-[32rem] h-52 rounded-[4rem] shadow-xl hover:bg-gray-300 hover:bg-opacity-60 ease-in-out duration-700">
              {/* image goes here */}
              <img src={pharmboticsImage}  alt="Pharmabotics" className='w-2/3 object-hidden transform lg:translate-y-20 hover:-translate-y-4 ease-in-out duration-500 hover:scale-105'></img>
            </div>
          </div>

          <div className="lg:flex justify-between items-center mt-8">

            <div>
              <h1 className="font-interTight lg:text-2xl text-xl font-semibold lg:ml-16">PharmaBotics</h1>
              <h2 className="font-interTight font-medium lg:ml-16">Automated pill dispenser</h2>
            </div>

            <div className='pt-4'>
              <button onClick={navigateConnect2} className=" lg:mr-16 bg-black text-white text-md py-4 px-8 rounded-full flex items-center group hover:bg-gray-400 ease-in-out duration-500">
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

            <div className='justify-items-center'>
              <div className=" pt-10 overflow-hidden flex bg-gray-100 justify-center items-center lg:w-11/12 lg:h-[32rem] h-52 rounded-[4rem] shadow-xl hover:bg-gray-300 hover:bg-opacity-60 ease-in-out duration-700">
                {/* image goes here */}
                <img src={dbheroes}  alt="dbheroes" className='w-2/3 object-hidden transform lg:translate-y-20 hover:-translate-y-4 ease-in-out duration-500 hover:scale-105'></img>
              </div>
            </div>  
  
            <div className="lg:flex justify-between items-center mt-8">
  
              <div>
                <h1 className="font-interTight lg:text-2xl text-xl font-semibold lg:ml-16">Dragon Ball Heroes Shooter</h1>
                <h2 className="font-interTight font-medium lg:ml-16">Player vs CPU shooter game</h2>
              </div>
  
              <div className='pt-4'>
                <button onClick={navigateConnect3} className="lg:mr-16 bg-purple-900 text-white text-md py-4 px-8 rounded-full flex items-center group hover:bg-gray-400 ease-in-out duration-500 ">
                  Github
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