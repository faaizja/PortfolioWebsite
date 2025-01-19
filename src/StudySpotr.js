import React from "react";
import zoomOut from "./images/zoomOut.png"
import mink from "./images/minkCafe.png"
import mainMap from "./images/mainMap.png"


const studySpotr = () => {

    return (

        <section className="lg:mt-24 mt-24 ml-3 lg:ml-24 lg:mb-24 lg:mr-80">

            <h1 className="text-black font-interTight text-9xl font-semibold">Study <span className="text-orange-400 fadeIn">Spotr</span></h1>


            <h2 className="lg:text-4xl text-2xl font-interTight font-semibold lg:mt-1 mt-10">Full-stack web app</h2>


            {/* OVERVIEW */}
            <h2 className="lg:mt-56 mt-10 text-xl lg:text-2xl font-interTight font-semibold">Project Overview</h2>

            <p className="text-balance lg:mt-2">
                Study Spotr is a full-stack web application developed to assist users 
                in discovering the best study environments based on their preferences. 
                Designed to address the common challenge of finding study spots that 
                suit various needs such as quietness, available seating, Wi-Fi, and 
                ambiance. The app enables users to set preferences, view spot ratings and comments,
                and add spots to share with other users.
                Built with a focus on user experience, the interface is intuitive, 
                catering to individuals from different backgrounds, whether students 
                or professionals seeking productive workspaces.
            </p>

            {/* PROBLEM AND OBJECTIVES */}
            <h2 className="lg:mt-12 mt-5 lg:text-2xl text-xl font-interTight font-semibold">Problem and Objective</h2>
            
            <p className="text-balance lg:mt-2">
                Finding a suitable study environment can be challenging and often 
                impacts productivity and focus. Research indicates that noise levels,
                overcrowding, and lack of amenities are common factors that make study
                spaces less conducive to effective work. Our goal was to create a 
                user-friendly app that helps individuals locate ideal study spots 
                based on their preferences, addressing key needs like quietness, 
                available seating, and accessibility to boost study efficiency and comfort.
            </p>

            {/* SKILLS */}
            <h2 className="lg:mt-12 mt-5  mb-2 lg:text-2xl text-xl font-interTight font-semibold">Skills & Tools</h2>

            <div className="lg:ml-4">
                <h3 className="lg:mt-2 lg:text-lg font-interTight font-semibold">Project Purpose: <span className="font-medium lg:text-sm"> I collaborated on solving the challenge of finding ideal study locations for students in urban environments by contributing to the development of accessible, user-centric features.</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Timeframe: <span className="font-medium lg:text-sm"> September 2024 - ongoing</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Accessibility: <span className="font-medium lg:text-sm"> I focused on designing and implementing accessible features, including clear iconography, adaptive layouts, and location filters to enhance ease of use for both busy and quieter spaces.</span> </h3>
                <h3 className=" lg:text-lg font-interTight font-semibold">UI/UX Design: <span className="font-medium lg:text-sm"> I contributed to crafting user-friendly navigation and intuitive interfaces, ensuring diverse user preferences for study environments were met effectively.</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Front-End: <span className="font-medium lg:text-sm"> React.js | Tailwind CSS</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Back-End: <span className="font-medium lg:text-sm"> Node.js | MongoDB | AWS</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Tools: <span className="font-medium lg:text-sm"> Mapbox API | GitHub | VSCode | Vercel</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">My Role: <span className="font-medium lg:text-sm"> As a co-developer, I created front-end components, optimized back-end data flow, and integrated the Mapbox API for location-based services.</span> </h3>

            </div>

            {/* PROCESS */}
            <h2 className="lg:mt-12 mt-10 lg:text-2xl font-interTight font-semibold text-xl">Process & Solution</h2>

            {/* GOALS */}
            <h3 className="lg:text-lg font-interTight font-semibold">Goals:</h3>

            <div className="flex lg:gap-10 gap-1 mt-4">
                <div className="lg:w-60 lg:h-40 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center lg:p-7 p-4 font-interTight font-medium text-black">
                    I designed an intuitive UI for finding ideal study spots based on user preferences.
                </div>

                <div className="lg:w-60 lg:h-40 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center lg:p-7 p-4 font-interTight font-medium text-black">
                    I implemented location-based search and filtering features to enable users to quickly identify suitable study spaces.
                </div>

                <div className="lg:w-60 lg:h-40 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center lg:p-4 p-6 font-interTight font-medium text-black">
                    I prioritized accessibility to ensure ease of use across different audiences, including students with varied study preferences.
                </div>

            </div>  

            {/* KEY DECISIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5">Key Decisions:</h3>

            <div className="flex lg:gap-10 gap-1 lg:mt-4 mt-2">

                <div className="lg:w-72 lg:h-60 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center lg:p-1 font-interTight font-medium text-black">
                    I integrated a location-based search option with customizable filters (quiet spots, Wi-Fi, white boards) to allow users to easily find a suitable study environment.
                </div>

                <div className="lg:w-72 lg:h-60 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-2 font-interTight font-medium text-black">
                    I implemented the Mapbox API to provide real-time location and distance data to allow users to see how far they are from different work spots.
                </div>

                <div className="lg:w-72 lg:h-60 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center lg:p-2 font-interTight font-medium text-black">
                    I designed a clean, high-contrast interface with clear, accessible icons to simplify navigation, enabling users to explore and save their preferred locations intuitively.
                </div>

            </div>  


            {/* PHASES AND ITERATIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Initial Phases and Iterations:</h3>

            <p className="font-interTight font-medium text-balance">
                In Study Spotr's early phase, I prioritized implementing core features 
                like location-based filtering to help users find ideal study and work spots. 
                I developed an initial interface using the Mapbox API, integrating basic 
                search functionality with accessible navigation. While working on this phase, 
                I encountered challenges with filtering accuracy and map integration, 
                which I identified as key areas for improvement in later versions.
            </p>

            {/* FIRST ITERATION IMAGES */}
            <div className="flex gap-3 lg:mt-2">
                <img src={mainMap} alt="map" className="lg:w-[55rem] lg:h-[31rem] w-5/6 rounded-[1.5rem] shadow-black shadow-lg lg:hover:translate-x-52 ease-in-out duration-700"></img>
            </div>


            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-9 text-xl mt-5">Second Iteration and Refinements:</h3>

            <p className="font-interTight font-medium text-balance">
                During the second iteration, I refined the interface 
                and strengthened the integration between the front-end 
                and back-end systems. I improved filter accuracy by 
                fine-tuning parameters, enhanced map responsiveness, 
                and redesigned navigation to provide a more intuitive 
                user experience. These refinements resulted in faster, 
                more precise results, aligning user inputs more effectively
                with relevant study spot options.
            </p>

            {/* SECOND ITERATION IMAGES */}
            <div className="flex gap-3 lg:mt-2">
                <img src={mink} alt="mink cafe" className="lg:w-[55rem] lg:h-[31rem] w-5/6 rounded-[1.5rem] shadow-black shadow-lg lg:hover:translate-x-52 ease-in-out duration-700"></img>
            </div>


            {/* Challenges and adaptations */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Challenges and Adaptations:</h3>

            <p className="font-interTight font-medium text-balance">
                One of the main challenges I faced was ensuring accurate 
                filtering and improving map response times. To address 
                these issues, I fine-tuned filter parameters and 
                restructured the integration between the Mapbox API 
                and the back-end, significantly improving performance and reliability.
            </p>

            <div className="flex gap-3 lg:mt-2">
                <img src={zoomOut} alt="wholemap" className="lg:w-[55rem] lg:h-[31rem] w-5/6 rounded-[1.5rem] shadow-black shadow-lg lg:hover:translate-x-52 ease-in-out duration-700"></img>
            </div>



            {/* final outcome*/}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-10 mt-5 text-xl">Final Outcome:</h3>

            <p className="font-interTight font-medium text-balance lg:mb-5 mb-5">
                 Although Study Spotr is still a work in progress,
                 I have solidified key functionalities on the app that make it perfectly usable with a 
                 refined integration between the front-end 
                 and back-end. My ongoing efforts are focused on 
                 enhancing the accuracy and usability of the application
                 to integrate more complex features for users.
            </p>



        </section>

    )
}

export default studySpotr;