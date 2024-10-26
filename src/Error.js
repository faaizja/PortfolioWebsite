import React from "react";
import { useNavigate } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';



const Error = () => {

    const navigate = useNavigate();

    const navigateConnect = () => {
      navigate('/');
    };

    return (

        <section className="lg:mt-52 mt-72">
            <div className="lg:ml-24 ml-14 flex-col flex">

                <h1 className="lg:text-9xl text-7xl font-interTight font-semibold fadeIn">
                    Error 404
                </h1>
                <h1 className="lg:text-5xl text-3xl font-interTight font-semibold text-gray-400 fadeInSlower">
                    Page not found.
                </h1>
                
                <button onClick={navigateConnect} 
                className="w-max flex flex-row items-center gap-4 lg:mt-10 mt-8 px-9 py-5 text-white bg-black text-lg font-medium rounded-full group hover:bg-gray-400 ease-in-out duration-500"
                >
                    Home <FiArrowRight strokeWidth={3} size={20} className="text-white transform group-hover:translate-x-2 transition-transform ease-in-out duration-500" />
                </button>

            </div>
        </section>
    );

}

export default Error;