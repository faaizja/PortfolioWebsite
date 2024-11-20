import React from 'react';


const Experience = () => {

    return (

      <section id="Experience" className='lg:mt-14 mt-7 flex flex-col lg:flex-row justify-between lg:px-24 px-5'>

        {/* div for entire experiences section */}

            <h1 className='font-interTight font-bold lg:text-5xl text-3xl'>
                Professional Experience
            </h1>

            {/* experiences list */}
            <div className='lg:w-1/2 lg:pt-7'>

                <h2 className='lg:pt-14 pt-5 font-interTight font-semibold lg:text-2xl text-[1.2rem]'>
                    Robotics Instructor
                </h2>
                <h3 className='pb-3 lg:pb-0'>
                    <span className='font-semibold text-md'>Zebra Robotics</span> --{'>'} since October 2024
                </h3>
                <hr class="h-px my-5 border-0 dark:bg-gray-700"></hr>

                {/* <h2 className='lg:pt-3 pt-5 font-interTight font-semibold lg:text-2xl text-[1.2rem]'>
                    Front-end developer
                </h2>
                <h3 className='pb-3 lg:pb-0'>s
                    <span className='font-semibold text-md'>Study Spotr</span> --{'>'} since October 2024
                </h3>
                <hr class="h-px my-5 border-0 dark:bg-gray-700"></hr> */}
                

                <h2 className='lg:pt-3 pt-5 font-interTight font-semibold lg:text-2xl text-[1.2rem]'>
                    Director of Marketing
                </h2>
                <h3 className=''>
                    <span className='font-semibold text-md pb-5'>SFU MSA</span> --{'>'} since April 2024
                </h3>
                <hr class="h-px my-5 border-0 dark:bg-gray-700"></hr>

            </div>









      </section>  
    );


}

export default Experience;