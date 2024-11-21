import React from "react";
import pressureSensorImage from "./images/pressureSensor.png"
import proximitySensorImage from "./images/proximitySensor.png"
import image3dPrint from "./images/3dPrintImage.png"
import loginImage from "./images/loginImage.png"
import dashboardImage from "./images/dashboardImage.png"
import fingerprintImage from "./images/fingerprintCode.png"

const Pharmabotics = () => {

    return (

        <section className="lg:mt-24 lg:ml-24 lg:mb-24 mt-24 ml-3 lg:mr-80">

            <h1 className="text-black font-interTight text-9xl font-semibold">Pharma<span className="text-gray-400 fadeIn">Botics</span></h1>
            
            <h2 className="lg:text-4xl font-interTight font-semibold lg:mt-1 mt-10 text-2xl">Software/Hardware Project</h2>


            {/* OVERVIEW */}
            <h2 className="lg:mt-56 lg:text-2xl font-interTight font-semibold text-xl mt-10">Project Overview</h2>

            <p className="text-balance lg:mt-2">
             Pharmabotics is a responsive web application designed to assist users with medication management.
             It was developed as a tool to address medication adherence challenges, 
             providing features that allow users to set medication reminders, track dosages, 
             and receive personalized alerts based on their medication schedules. 
             The app was built with user experience and accessibility in mind, 
             ensuring the interface is straightforward for individuals of varying ages and technical backgrounds. 
             Key functionalities include a dashboard where users can view their medication list, schedule reminders, 
             track missed doses, and access health tips related to their prescribed medications. 
             The outcome of this project was a fully functional prototype with a clean, intuitive user interface, 
             tailored for usability and clarity. The app prototype successfully integrates design and health-tech 
             principles to improve user adherence to prescribed medication routines.
            </p>

            {/* PROBLEM AND OBJECTIVES */}
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Problem and Objective</h2>
            
            <p className="text-balance lg:mt-2">
                Medication non-adherence is a prevalent issue that leads to significant health risks and complications. 
                Research shows that forgetfulness and complexity of schedules are primary reasons for non-compliance.
                My objective was to build a user-friendly app that simplifies the process of managing multiple medications, 
                addressing the points of adherence and timely consumption for patients.
            </p>

            {/* SKILLS */}
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Skills & Tools</h2>

            <div className="lg:ml-4">
                <h3 className="mt-2 lg:text-lg font-interTight font-semibold">Project Purpose: <span className="font-medium lg:text-sm"> I developed this project as part of a school assignment to explore the integration of software and hardware components for an innovative solution in the healthcare domain.</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Timeframe: <span className="font-medium lg:text-sm"> July 2024 - August 2024</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Accessibility: <span className="font-medium lg:text-sm">I designed and implemented features with accessibility in mind, including adjustable font sizes, high-contrast color options, and simplified layouts to improve readability for elderly users.</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">UI/UX Design: <span className="font-medium lg:text-sm">I focused on creating an intuitive, accessible interface tailored for inclusivity, ensuring the design was simple yet effective for users in a health-tech context.</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Front-End: <span className="font-medium lg:text-sm"> HTML | Tailwind CSS | React.js</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Back-End: <span className="font-medium lg:text-sm"> Node.js | MongoDB | Express.js</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Tools: <span className="font-medium lg:text-sm"> Arduino UNO Kit | C++ | Sensors & Transducers | Github | VsCode</span> </h3>
                <h3 className="lg:text-lg font-interTight font-semibold">Contributors:</h3>
                <li className="lg:ml-8 font-interTight font-medium">Faaiz Abdullah (me) - React Js interface and Node.js code, Arduino code for fingerprint sensor and pressure sensor, physical building and prototyping.</li>
                <li className="lg:ml-8 font-interTight font-medium">Harjot Singh - React JS interface and Node JS code, Arduino code for fingerprint sensor, physical building and prototyping.</li>
                <li className="lg:ml-8 font-interTight font-medium">Kashfi Rashid - Arduino code for lid motion using an ultrasonic sensor, 3D printing, physical building and prototyping.</li>
            </div>

            {/* PROCESS */}
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Process & Solution</h2>

            {/* GOALS */}
            <h3 className="lg:text-lg font-interTight font-semibold">Goals:</h3>

            <div className="flex lg:gap-10 gap-1 mt-4">
                <div className="lg:w-60 lg:h-44 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-1 lg:p-5 font-interTight font-medium text-black">
                    I aimed to design an intuitive UI that simplified medication schedules for users.
                </div>

                <div className="lg:w-60 lg:h-44 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-2 lg:p-2 font-interTight font-medium text-black">
                    I sought to develop customizable reminders and tracking features to ensure adherence to medication routines.
                </div>

                <div className="lg:w-60 lg:h-44 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-2 lg:p-4 font-interTight font-medium text-black">
                    I prioritized accessibility in every aspect of the app, ensuring it could be used easily by elderly users and those with varying needs.
                </div>

            </div>  

            {/* KEY DECISIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5">Key Decisions:</h3>

            <div className="flex lg:gap-10 gap-1 mt-4">

                <div className="lg:w-72 lg:h-72 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-1 lg:p-1 font-interTight font-medium text-black">
                    I enabled hands-free medication access by programming a proximity sensor. This ensured patients could access medication with minimal effort, which was essential for improving accessibility and reducing handling errors.
                </div>

                <div className="lg:w-72 lg:h-72 border-4 hover:border-8 ease-in-out duration-300  rounded-xl flex items-center justify-center text-center p-2 lg:p-2 font-interTight font-medium text-black">
                    I integrated identity recognition by coding the fingerprint sensor for reliable authentication. This secured access for patients and healthcare staff while maintaining ease of use.
                </div>

                <div className="lg:w-72 lg:h-72 border-4 hover:border-8 ease-in-out duration-300 rounded-xl flex items-center justify-center text-center p-2 lg:p-2 font-interTight font-medium text-black">
                    I designed and implemented a high-contrast interface with large, clear buttons. This approach made navigation intuitive and accessible for all users, regardless of their tech experience.
                </div>

            </div>  


            {/* PHASES AND ITERATIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Initial Phases and Iterations:</h3>

            <p className="font-interTight font-medium text-balance">
                In the initial phase of PharmaBotics, I laid the foundation for the project 
                by integrating key hardware components, including the fingerprint sensor 
                for secure user authentication, DC motors for dispensing pills, and a 
                proximity sensor for hands-free interaction. I worked on creating a prototype that 
                securely dispensed one type of medication at a time and designed a rough version of the user 
                interface. While testing, I identified 
                challenges such as false readings from the proximity sensor and issues 
                with the pill dispenser releasing multiple pills. I addressed these issues 
                by refining sensor thresholds and adjusting motor configurations, 
                setting the stage for future iterations.
            </p>

            {/* FIRST ITERATION IMAGES */}
            <div className="lg:flex lg:gap-3 lg:mt-2">
                <img src={pressureSensorImage} alt="pressureSensor" className="w-[37rem] rounded-[1.5rem] mb-3"></img>
                <img src={proximitySensorImage} alt="proximitySensor" className="w-[37rem] rounded-[1.5rem] mb-3" ></img>
            </div>

            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-9 mt-5 text-xl">Second Iteration and Refinements:</h3>

            <p className="font-interTight font-medium text-balance">
                 In the second iteration, I worked on optimizing the integration 
                 between the front end and back end to ensure seamless 
                 communication between user actions and the dispensing 
                 system. I enhanced the fingerprint sensor's accuracy 
                 for reliable authentication and improved the motion 
                 sensor mechanism to activate only after identity verification and proiximity of the user's hand.
                 By refining the connection between hardware and software, a secure and
                 responsive system was ready for real-world application.
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

            {/* Challenges and adaptations */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Challenges and Adaptations:</h3>

            <p className="font-interTight font-medium text-balance">
                I faced challenges with the pill dispenser jamming or 
                releasing multiple pills at once. To address this, I 
                redesigned the motor setup in OnShape AutoCAD and 
                recalibrated motor speed to ensure single-pill accuracy. 
                The fingerprint sensor also struggled with reliable identification, 
                so I wrote code to store fingerprints in the backend database 
                for quicker and more consistent authentication. Additionally, 
                I revamped the interface after user testing revealed it was 
                cluttered. I simplified navigation, added high-contrast buttons, 
                and improved the overall flow to make it intuitive and accessible for all users.
            </p>


            {/* final outcome*/}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Final Outcome:</h3>

            <p className="font-interTight font-medium text-balance">
                PharmaBotics successfully addressed medication adherence 
                issues by combining secure hardware with an intuitive 
                user experience. I ensured precise pill dispensing through
                 a calibrated motor design and implemented robust fingerprint 
                 authentication to restrict access to authorized users. 
                 The redesigned interface supported users with varying 
                 tech proficiency, making the system easy to operate while
                  reducing errors in dosage and unauthorized access. This 
                  solution demonstrated the potential for improving medication 
                  management with innovative and user-centered design.
            </p>

            {/* video */}
            <div className="flex gap-3 lg:mt-3 mb-5">

                <video
                    controls
                    alt="PharmaBotics Project Demo"
                    className="lg:w-fit lg:max:w-fit rounded-3xl"
                >
                    <source src="pharmabotics.mp4" type="video/mp4" />
                        pharmabotics vid
                </video>

            </div>

        </section>

    )


}

export default Pharmabotics;