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

            <h1 className="text-black font-interTight text-9xl font-semibold">Pharma<span className="text-gray-400 fadeIn">botics</span></h1>
            
            <h2 className="lg:text-4xl font-interTight font-semibold lg:mt-1 mt-10 text-2xl">Software/Hardware project</h2>


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
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Problem and objective</h2>
            
            <p className="text-balance lg:mt-2">
                Medication non-adherence is a prevalent issue that leads to significant health risks and complications. 
                Research shows that forgetfulness and complexity of schedules are primary reasons for non-compliance.
                My objective was to build a user-friendly app that simplifies the process of managing multiple medications, 
                addressing the points of adherence and timely consumption for patients.
            </p>

            {/* SKILLS */}
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Skills & tools</h2>

            <h3 className="lg:mt-2 lg:text-lg font-interTight font-semibold mt-3">UI/UX design: <span className="font-medium lg:text-sm"> Focused on accessibility, simplicity, and intuitive navigation in a health-tech context, ensuring inclusivity for elderly users.</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Accessibility: <span className="font-medium lg:text-sm"> Implemented features with accessibility needs in mind, including font size adjustments, high-contrast color options, and simplified layouts for readability.</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Front-end: <span className="font-medium lg:text-sm"> HTML | Tailwind CSS | React.js</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Back-end: <span className="font-medium lg:text-sm"> Node.js | MongoDB | Express.js</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Tools: <span className="font-medium lg:text-sm"> Arduino UNO Kit | C++ | Sensors & Transducers | Github | VsCode</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Project purpose: <span className="font-medium lg:text-sm"> This project was created as part of a school assignment, specifically to explore the integration of software and hardware components in making an innovative project in the healhcare domain.</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Timeframe: <span className="font-medium lg:text-sm"> July 2024 - August 2024</span> </h3>
            <h3 className="lg:text-lg font-interTight font-semibold">Contributors:</h3>
            <li className="lg:ml-8 font-interTight font-medium">Faaiz Abdullah (me) - Node.js code, Arduino code for fingerprint sensor and pressure sensor, physical building and prototyping.</li>
            <li className="lg:ml-8 font-interTight font-medium">Harjot Singh - React JS interface and Node JS code, arduino code for fingerprint sensor, physical building and prototyping.</li>
            <li className="lg:ml-8 font-interTight font-medium">Kashfi Rashid - Arduino code for lid motion using an ultrasonic sensor, 3D printing, physical building and prototyping.</li>


            {/* PROCESS */}
            <h2 className="lg:mt-12 lg:text-2xl font-interTight font-semibold mt-5 text-xl">Process & solution</h2>

            {/* GOALS */}
            <h3 className="lg:text-lg font-interTight font-semibold">Goals:</h3>

            <div className="flex lg:gap-10 gap-1 mt-4">
                <div className="lg:w-60 lg:h-32 border-4 rounded-xl flex items-center justify-center text-center p-2 lg:p-4 font-interTight font-medium text-black">
                    To design an intuitive UI for medication schedules
                </div>

                <div className="lg:w-60 lg:h-32 border-4 rounded-xl flex items-center justify-center text-center p-2 lg:p-4 font-interTight font-medium text-black">
                    To provide customizable reminders and tracking to ensure ease of adherence
                </div>

                <div className="lg:w-60 lg:h-32 border-4 rounded-xl flex items-center justify-center text-center p-2 lg:p-4 font-interTight font-medium text-black">
                    Prioritize accessibility to ensure the app is usable by any audience including elderly users
                </div>

            </div>  

            {/* KEY DECISIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5">Key decisions:</h3>

            <div className="flex lg:gap-10 gap-1 mt-4">

                <div className="lg:w-72 lg:h-60 border-4 rounded-xl flex items-center justify-center text-center p-1 lg:p-1 font-interTight font-medium text-black">
                    Enabled hands-free medication access through a proximity sensor, ensuring patients receive medication with minimal effort—ideal for accessibility and reducing handling errors.
                </div>

                <div className="lg:w-72 lg:h-60 border-4 rounded-xl flex items-center justify-center text-center p-2 lg:p-1 font-interTight font-medium text-black">
                    Used fingerprint recognition for quick, reliable authentication of patients and healthcare staff, ensuring secure and authorized access while maintaining ease of use.
                </div>

                <div className="lg:w-72 lg:h-60 border-4 rounded-xl flex items-center justify-center text-center p-2 lg:p-1 font-interTight font-medium text-black">
                    Created a high-contrast interface with large, clear buttons to guide users intuitively through the app, enhancing accessibility and making navigation straightforward for all users.
                </div>

            </div>  


            {/* PHASES AND ITERATIONS */}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Initial phases and iterations:</h3>

            <p className="font-interTight font-medium text-balance">
                     In our initial phase, we laid the groundwork by identifying key components and testing basic functionalities for a secure,
                     automated medicine dispensing system. The primary focus was to integrate essential hardware, including the 
                     fingerprint sensor for user authentication, DC motors for dispensing pills, and a proximity sensor for patient 
                     interaction. During this stage, we aimed to address basic usability and accessibility by creating a prototype 
                     that securely dispensed one type of medication. We also experimented with an initial interface design that featured large, 
                     high-contrast buttons to make it accessible to a range of users. A few challenges arose in this phase, 
                     particularly with the hardware integration. For example, ensuring the accuracy of the proximity sensor was crucial
                     for hands-free use, but it occasionally registered false positives. We also faced issues with the pill dispenser mechanism, 
                     as it struggled to reliably release a single pill each time. These challenges guided us toward necessary 
                     adjustments and design enhancements for future iterations.
            </p>

            {/* FIRST ITERATION IMAGES */}
            <div className="lg:flex lg:gap-3 lg:mt-2">
                <img src={pressureSensorImage} alt="pressureSensor" className="w-[37rem] rounded-[1.5rem] mb-3"></img>
                <img src={proximitySensorImage} alt="proximitySensor" className="w-[37rem] rounded-[1.5rem] mb-3" ></img>
            </div>

            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-9 mt-5 text-xl">Second iteration and refinements:</h3>

            <p className="font-interTight font-medium text-balance">
                In the second iteration, we focused on refining the integration between the front end and back end, 
                achieving a seamless connection between user interactions and the core dispensing functions. 
                We optimized the fingerprint sensor, enhancing its accuracy for patient and caregiver authentication. 
                This iteration also perfected the mechanism of the motion sensor, which now only activated upon confirmed authentication, 
                eliminating any faulty dispensing.
                The interface was also redesigned to provide clear feedback on user actions, displaying status updates in real 
                time to improve overall usability. By connecting the front end directly to these sensors, we created a responsive
                and secure system that aligned each user interaction precisely with the intended function, making this iteration 
                robust and functional for real-world use.
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
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Challenges and adaptations:</h3>

            <p className="font-interTight font-medium text-balance">
                 We encountered challenges with the pill dispensing mechanism,
                 as it initially jammed or dispensed multiple pills at once. 
                 Recognizing this issue, I worked on adjusting the motor speed,
                 redesigned the rotation setup in OnShape AutoCad to ensure single-pill dispensing accuracy. 
                 The user interface also needed refinement. Initial user testing revealed 
                 it was too cluttered and confusing. I redesigned the layout with 
                 simplified navigation and high-contrast buttons, enhancing user 
                 flow and accessibility. The fingerprint sensor posed an additional 
                 hurdle, often misidentifying users or not recognizing previously enrolled fingerprints.
                 To resolve this, I recalibrated the sensor and wrote code to enhance its integration,
                 by saving enrolled fingerprints in the backend database so that the fingerprints can be 
                 searched for in a concrete memory, helping achieve faster and more reliable authentication.
            </p>


            {/* final outcome*/}
            <h3 className="lg:text-lg font-interTight font-semibold lg:mt-5 mt-5 text-xl">Final outcome:</h3>

            <p className="font-interTight font-medium text-balance">
                The final outcome of PharmaBotics effectively addressed medication 
                adherence issues by providing a secure, accessible, and user-friendly 
                dispensing solution. Through the calibrated pill-dispensing motor 
                and refined fingerprint authentication, we ensured precise delivery
                to verified users only, eliminating errors in dosage and unauthorized
                access. The improved user interface with high-contrast, easy-to-navigate
                buttons allowed patients to operate the system with minimal guidance,
                supporting individuals with varying levels of tech proficiency. 
                This solution demonstrated a real impact on improving medication 
                management, as it combined essential security features with an intuitive 
                design, reducing the risk of missed or incorrect doses.
            </p>

            {/* video */}
            <div className="flex gap-3 lg:mt-3 mb-5">

                <video
                    controls
                    alt="PharmaBotics Project Demo"
                    className="lg:w-fit lg:max:w-fit rounded-3xl"
                >
                    <source src="pharmabotics.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>

        </section>

    )


}

export default Pharmabotics;