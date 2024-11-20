import React from "react";
import zoomOut from "./images/zoomOut.png"
import mink from "./images/minkCafe.png"
import mainMap from "./images/mainMap.png"


const studySpotr = () => {

    return (

        <section className="lg:mt-24 mt-24 ml-3 lg:ml-24 lg:mb-24 lg:mr-80">

            <h1 className="text-black font-interTight text-8xl font-semibold">Study <span className="text-orange-400 fadeIn">Spotr</span></h1>


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
            <h2 className="lg:mt-12 mt-5 lg:text-2xl text-xl font-interTight font-semibold">Problem and objective</h2>
            
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
            <h2 className="lg:mt-12 mt-5  mb-2 lg:text-2xl text-xl font-interTight font-semibold">Skills & tools</h2>

            <h3 className="lg:mt-2 lg:text-lg font-interTight font-semibold">UI/UX design: <span className="font-medium lg:text-sm"> Emphasized user-friendly and intuitive navigation, designed to meet diverse user preferences for study environments and enable easy browsing.</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Accessibility: <span className="font-medium lg:text-sm"> Focused on accessible features like clear iconography, adaptive layouts, and location filters for improved ease of use in busy or quieter spaces.</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Front-end: <span className="font-medium lg:text-sm"> React.js | Tailwind CSS</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Back-end: <span className="font-medium lg:text-sm"> Node.js | MongoDB | AWS</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Tools: <span className="font-medium lg:text-sm"> Mapbox API | GitHub | VSCode | Vercel</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Project purpose: <span className="font-medium lg:text-sm"> This project is a collaborative endeavor aimed at solving the challenge of finding ideal study locations, especially for students in urban environments.</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Timeframe: <span className="font-medium lg:text-sm"> September 2024 - ongoing</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Contributors:</h3>
            <li className="lg:ml-8 font-interTight font-medium"> <u className="hover:cursor-pointer font-semibold" onClick={() => window.open("https://www.harjotsinghkooner.com")}>Harjot Singh</u> - Founder and lead developer.</li>
            <li className="lg:ml-8 font-interTight font-medium">Faaiz Abdullah (me) - Co-developer.</li>


            {/* PROCESS */}
            <h2 className="lg:mt-12 mt-10 lg:text-2xl font-interTight font-semibold text-xl">Process & solution</h2>

            {/* GOALS */}
            <h3 className="lg:text-lg font-interTight font-semibold">Goals:</h3>

            <div className="flex lg:gap-10 gap-1 mt-4">
                <div className="lg:w-60 lg:h-32 border-4 rounded-xl flex items-center justify-center text-center lg:p-2 p-4 font-interTight font-medium text-black">
                    Design an intuitive UI for finding ideal study spots based on user preferences.
                </div>

                <div className="lg:w-60 lg:h-32 border-4 rounded-xl flex items-center justify-center text-center lg:p-2 p-4 font-interTight font-medium text-black">
                    Provide location-based search and filtering options to help users quickly identify study spaces that match their needs.
                </div>

                <div className="lg:w-60 lg:h-32 border-4 rounded-xl flex items-center justify-center text-center lg:p-2 p-4 font-interTight font-medium text-black">
                    Prioritize accessibility to ensure ease of use across different audiences, including students with varied study preferences.
                </div>

            </div>  

            {/* KEY DECISIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5">Key decisions:</h3>

            <div className="flex lg:gap-10 gap-1 lg:mt-4 mt-2">

                <div className="lg:w-72 lg:h-60 border-4 rounded-xl flex items-center justify-center text-center p-3 font-interTight font-medium text-black">
                    Integrated location-based search with customizable filters (quiet spots, Wi-Fi, white boards) to allow users to easily find a suitable study environment.
                </div>

                <div className="lg:w-72 lg:h-60 border-4 rounded-xl flex items-center justify-center text-center p-3 font-interTight font-medium text-black">
                    Used Mapbox API to provide real-time location and distance data, ensuring users can view nearby spots in their area.
                </div>

                <div className="lg:w-72 lg:h-60 border-4 rounded-xl flex items-center justify-center text-center p-3 font-interTight font-medium text-black">
                    Developed a clean, high-contrast interface with clear, accessible icons to simplify navigation, making it intuitive for users to explore and save preferred locations.
                </div>

            </div>  


            {/* PHASES AND ITERATIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Initial phases and iterations:</h3>

            <p className="font-interTight font-medium text-balance">
                In Study Spotr's early phase, we focused on core features like location-based 
                filtering to help users find ideal study/work spots. Using the Mapbox API, 
                we developed an initial interface with basic search functionality and accessible 
                navigation. Challenges with filtering accuracy and map integration revealed areas
                to improve in later versions.
            </p>

            {/* FIRST ITERATION IMAGES */}
            <div className="flex gap-3 lg:mt-2">
                <img src={mainMap} alt="map" className="lg:w-[55rem] lg:h-[31rem] w-5/6 rounded-[1.5rem] shadow-black shadow-lg lg:hover:translate-x-52 ease-in-out duration-700"></img>
            </div>


            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-9 text-xl mt-5">Second iteration and refinements:</h3>

            <p className="font-interTight font-medium text-balance">
                In the second iteration, we refined the interface and strengthened front-end
                and back-end integration. We improved filter accuracy, improved map 
                responsiveness, and revamped navigation for a more intuitive experience. 
                This iteration brought faster, more accurate results, aligning user 
                input more closely with relevant study spot options.
            </p>

            {/* SECOND ITERATION IMAGES */}
            <div className="flex gap-3 lg:mt-2">
                <img src={mink} alt="mink cafe" className="lg:w-[55rem] lg:h-[31rem] w-5/6 rounded-[1.5rem] shadow-black shadow-lg lg:hover:translate-x-52 ease-in-out duration-700"></img>
            </div>


            {/* Challenges and adaptations */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Challenges and adaptations:</h3>

            <p className="font-interTight font-medium text-balance">
                Challenges included ensuring accurate filtering and improving map response times. 
                To solve these, we fine-tuned filter parameters and restructured the UI with clear 
                categories and an improved layout. Integration with the Mapbox API required 
                further tweaks, which helped streamline user interactions.
            </p>
            <div className="flex gap-3 lg:mt-2">
                <img src={zoomOut} alt="wholemap" className="lg:w-[55rem] lg:h-[31rem] w-5/6 rounded-[1.5rem] shadow-black shadow-lg lg:hover:translate-x-52 ease-in-out duration-700"></img>
            </div>



            {/* final outcome*/}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-10 mt-5 text-xl">Final outcome:</h3>

            <p className="font-interTight font-medium text-balance lg:mb-5 mb-5">
                Study Spotr is still in progress, but we've solidified 
                key functions and are refining front and back-end integration. 
                Ongoing efforts focus on enhanced accuracy and usability to 
                create a seamless experience for users finding study spaces.
            </p>



        </section>

    )
}

export default studySpotr;