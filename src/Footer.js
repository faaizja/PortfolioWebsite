import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const Footer = () => {
  return (
    <section id="Connect" className="lg:px-24 px-6 lg:mt-20 mt-10 bg-black h-56">

      <h1 className="font-interTight lg:text-5xl text-3xl font-bold text-white pt-10">
        Let's connect
      </h1>
      
      {/* buttons div */}
      <div className="flex gap-2 lg:mt-1 mt-6 lg:gap-3 lg:pt-8">

        <button
          onClick={() => window.open("https://www.instagram.com/faaiz.jd")}
          className="flex bg-black text-white border-2 border-gray-700 rounded-full lg:px-28 lg:py-2 py-2 px-2.5 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
        >
          Instagram
          <FiArrowUpRight strokeWidth={3} size={20} className="scale-75 ml-2 text-white transform transition-transform ease-in-out duration-500" />
        </button>

        <button
          onClick={() => window.open("https://www.linkedin.com/in/faaiz-abdullah-9004391a4/")}
          className="flex bg-black text-white border-2 border-gray-700 rounded-full lg:px-28 lg:py-2 py-2 px-2.5 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
        >
          Linkedin
          <FiArrowUpRight strokeWidth={3} size={20} className="scale-75 ml-2 text-white transform transition-transform ease-in-out duration-500" />
        </button>

        <button
          onClick={() => window.open("https://github.com/faaizja?tab=repositories")}
          className="flex bg-black text-white border-2 border-gray-700 rounded-full lg:px-28 lg:py-2 py-2 px-2.5 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
        >
          Github
          <FiArrowUpRight strokeWidth={3} size={20} className="scale-75 ml-2 text-white transform transition-transform ease-in-out duration-500" />
        </button>

        <button
          onClick={() => window.location.href = "mailto:fja19@sfu.ca"}
          className="flex bg-black text-white border-2 border-gray-700 rounded-full lg:px-28 lg:py-2 py-2 px-2.5 font-semibold font-interTight lg:text-xl text-[0.75rem] hover:bg-gray-600 ease-in-out duration-500"
        >
            Email
            <FiArrowUpRight strokeWidth={3} size={20} className="scale-75 ml-2 text-white transform transition-transform ease-in-out duration-500" />
        </button>

      </div>

      <h2 className="flex justify-center lg:mt-5 mt-6 text-white font-interTight font-medium text-[0.5rem] lg:text-sm">© Copyright Faaiz Abdullah 2024 | Made with React.js, Tailwind CSS, and hosted through Github and Vercel.</h2>

    </section>
  );
};

export default Footer;