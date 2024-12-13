import React from "react";
import pressureSensorImage from "./images/pressureSensor.png"
import proximitySensorImage from "./images/proximitySensor.png"
import image3dPrint from "./images/3dPrintImage.png"
import loginImage from "./images/loginImage.png"
import dashboardImage from "./images/dashboardImage.png"
import fingerprintImage from "./images/fingerprintCode.png"



const FootballWizard = () => {

    return (

        <section className="lg:mt-24 lg:ml-24 lg:mb-24 mt-24 ml-3 lg:mr-80">

            <h1 className="text-black font-interTight text-9xl font-semibold">Football <span className="text-fuchsia-900 fadeIn">Wizard</span></h1>
            
            <h2 className="lg:text-4xl font-interTight font-semibold lg:mt-1 mt-10 text-2xl">AI chatbot</h2>


            {/* OVERVIEW */}
            <h2 className="lg:mt-56 lg:text-2xl font-interTight font-semibold text-xl mt-10">Project Overview</h2>

            <p className="text-balance lg:mt-2">
                 Football Wizard is an AI-powered chatbot designed to provide users with 
                 quick, accurate, and insightful statistics and analytics about the Premier
                  League. By integrating advanced tools like the GPT API, 
                  RAGs (Retrieval-Augmented Generation), and LangChain, the 
                  chatbot delivers detailed answers to user queries, ensuring 
                  it serves as a reliable and knowledgeable "Premier League analyst."
            </p>

            {/* PROBLEM AND OBJECTIVES */}
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Problem and Objective</h2>
            
            <p className="text-balance lg:mt-2">
                In the fast-paced world of football, fans, analysts, and enthusiasts 
                often struggle to find quick, reliable statistics and meaningful insights
                about the Premier League. The problem is exacerbated when users need
                information across multiple seasons or wish to compare players and teams dynamically.
                I created Football Wizard to bridge this gap by building an AI chatbot 
                that combines the power of natural language processing with reliable, real-time data. 
                My objective was to create a tool that simplifies the process of accessing stats, making predictions, 
                and comparing players, while being fast, accurate, and easy to use.
            </p>

            {/* SKILLS */}
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Skills & Tools</h2>

            <div className="lg:ml-4">  
            <h3 className="mt-2 lg:text-lg font-interTight font-semibold">Project Purpose: <span className="font-medium lg:text-sm"> This project was developed to address a gap in the market — a need for a tool that could offer convenient, data-driven insights and comparisons for Premier League and football enthusiasts.</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Timeframe: <span className="font-medium lg:text-sm"> November 2024 - December 2024</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">UI/UX Design: <span className="font-medium lg:text-sm">I focused on creating an intuitive, accessible interface tailored for inclusivity, ensuring the design was simple yet effective for users in a health-tech context.</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Front-End: <span className="font-medium lg:text-sm"> React.js | Tailwind CSS</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Back-End: <span className="font-medium lg:text-sm"> Python | Flask | SQL</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Tools: <span className="font-medium lg:text-sm"> Python (Selenium for data scraping, pandas for preprocessing)| GitHub | VSCode | SQL</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Contributors:</h3>
                <li className="lg:ml-8 font-interTight font-medium">Faaiz Abdullah (me) - React Js interface and Node.js code, Arduino code for fingerprint sensor and pressure sensor, physical building and prototyping.</li>
                <li className="lg:ml-8 font-interTight font-medium">Harjot Singh - React JS interface and Node JS code, Arduino code for fingerprint sensor, physical building and prototyping.</li>
            </div>


            {/* PROCESS */}
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Process & Solution</h2>

            {/* GOALS */}
            <h3 className="lg:text-lg font-interTight font-semibold">Goals:</h3>

            <div className="flex lg:gap-10 gap-1 mt-4">
                <div className="lg:w-60 lg:h-44 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-1 lg:p-5 font-interTight font-medium text-black">
                Create a chatbot capable of answering both historical and recent Premier League queries with precision.
                </div>

                <div className="lg:w-60 lg:h-44 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-2 lg:p-2 font-interTight font-medium text-black">
                Seamlessly integrate AI capabilities with real-time scraped data to ensure accuracy.
                </div>

                <div className="lg:w-60 lg:h-44 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-2 lg:p-4 font-interTight font-medium text-black">
                Design a user-friendly interface that appeals to both casual fans and seasoned analysts.
                </div>

            </div>  


            {/* PHASES AND ITERATIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Phases and Iterations:</h3>

            <p className="font-interTight font-medium text-balance">
                The first step was setting up the foundational architecture of Football Wizard. 
                I worked on connecting GPT's capabilities with a retrieval-augmented generation (RAGs) system to enhance 
                the chatbot's ability to combine pre-trained knowledge with real-world data. 
                I also wrote Python scripts using Selenium to scrape Premier League statistics
                from 2019 onwards, processing them into clean CSV files for efficient use.
            </p>

            {/* FIRST ITERATION IMAGES */}
            <div className="lg:flex lg:gap-3 lg:mt-2">
                <img src={pressureSensorImage} alt="pressureSensor" className="w-[37rem] rounded-[1.5rem] mb-3"></img>
                <img src={proximitySensorImage} alt="proximitySensor" className="w-[37rem] rounded-[1.5rem] mb-3" ></img>
            </div>

            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-9 mt-5 text-xl">Second Iteration and Refinements:</h3>

            <p className="font-interTight font-medium text-balance">
            In the second phase, I worked on the front-end using React.js and Tailwind CSS to create a sleek chat interface. The design prioritized usability, with a clean layout, interactive features, and responsiveness across devices.

            On the back-end, I developed Flask endpoints to handle user queries efficiently, connecting the chatbot to its SQL database for storing conversation histories. This database allowed Football Wizard to maintain context and personalize user experiences.

            Additionally, I implemented comparison and prediction features, enabling the chatbot to analyze player stats dynamically and predict outcomes based on historical trends and provided data.
            </p>

            {/* SECOND ITERATION IMAGES */}
            <div className="lg:flex gap-3 lg:mt-2">
                <img src={image3dPrint} alt="printer" className="lg:w-[23rem] lg:h-[30rem] rounded-[1.5rem] mt-3 mb-3"></img>
                <img src={fingerprintImage} alt="fingerprint" className="w-[22rem] lg:h-[30rem] rounded-[1.5rem] mb-3" ></img>
            </div>
            <div className="lg:flex gap-3 lg:mt-2">
                <img src={loginImage} alt="login" className="lg:w-[38rem] lg:h-[23rem] rounded-[1.5rem] mb-3"></img>
                <img src={dashboardImage} alt="maindashboard" className="lg:w-[38rem] lg:h-[23rem] rounded-[1.5rem] mb-3" ></img>
            </div>


            {/* Reflection */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Reflection:</h3>

            <p className="font-interTight font-medium text-balance">
            Football Wizard was a rewarding project that allowed me to combine my love for football 
            with cutting-edge AI and data technologies. I took pride in the chatbot's ability 
            to merge real-time data and GPT's analytical capabilities, providing users with meaningful 
            insights at the click of a button. This project not only sharpened my technical skills in 
            Python, React.js, and AI integration but also taught me the value of user-centric design in creating impactful tools.

            The success of Football Wizard demonstrated the potential of AI-driven solutions in revolutionizing how we 
            engage with and understand complex datasets. It was fulfilling to see a concept evolve into a functional 
            prototype that football fans could genuinely benefit from.
            </p>

        </section>



    )


}

export default FootballWizard;