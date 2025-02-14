  import React from "react";
  import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";

  const Footer = () => {
    return (
      <section id="Connect" className="lg:px-24 px-6 lg:mt-20 mt-10 bg-black lg:h-56 h-[22rem]">

        <h1 className="font-interTight lg:text-5xl text-3xl font-bold text-white pt-10">
          Let's connect
        </h1>
        
        {/* buttons div */}
        <div className="lg:flex gap-3 lg:mt-1 mt-6 lg:gap-5 lg:pt-8">

          {/* <button
            onClick={() => window.open("https://www.instagram.com/faaiz.jd")}
            className="flex bg-black text-white border-2 border-gray-700 rounded-full lg:px-28 lg:py-2 py-2 px-2.5 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
          >
            Instagram
            <FiArrowUpRight strokeWidth={3} size={20} className="scale-75 ml-2 text-white transform transition-transform ease-in-out duration-500" />
          </button> */}


          <button
            onClick={() => window.open("https://www.linkedin.com/in/faaiz-abdullah-9004391a4/")}
            className="flex bg-black text-white border-2 border-gray-700 rounded-full lg:px-24 lg:py-2 py-2 px-32 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
          >
            LinkedIn
            <FiArrowUpRight strokeWidth={3} size={20} className="scale-75 ml-2 text-white transform transition-transform ease-in-out duration-500" />
          </button>


          <button
            onClick={() => window.open("https://github.com/faaizja?tab=repositories")}
            className="flex mt-2 lg:mt-0 bg-black text-white border-2 border-gray-700 rounded-full lg:px-24 lg:py-2 py-2 px-32 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
          >
            GitHub
            <FiArrowUpRight strokeWidth={3} size={20} className="scale-75 ml-2 text-white transform transition-transform ease-in-out duration-500" />
          </button>


          <button
            onClick={() => window.location.href = "mailto:fja19@sfu.ca"}
            className="flex mt-2 lg:mt-0 bg-black text-white border-2 border-gray-700 rounded-full lg:px-24 lg:py-2 py-2 px-32 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
          >
              Email
              <FiArrowUpRight strokeWidth={3} size={20} className="scale-75 ml-2 text-white transform transition-transform ease-in-out duration-500" />
          </button>
          

              <a
                href="/FaaizAbdullahResume.pdf" 
                download="FaaizAbdullah_Resume.pdf"
                className="text-nowrap flex mt-2 lg:mt-0 bg-black text-white border-2 border-gray-700 rounded-full lg:px-20 lg:py-2 py-2 px-24 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
              >
                Download Resume
                <FiArrowDown
                  strokeWidth={3}
                  size={21}
                  className="scale-75 lg:scale-100 ml-2 text-white transform transition-transform ease-in-out duration-500"
                />
              </a>


        </div>

        <h2 className="flex justify-center lg:mt-5 mt-6 text-white font-interTight font-medium text-[0.5rem] lg:text-sm">© Copyright Faaiz Abdullah 2025 | Made with React.js, Tailwind CSS, and hosted through GitHub and Vercel.</h2>

      </section>
    );
  };

  export default Footer;