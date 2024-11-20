import React from "react";
import blackTusk from "../src/images/blackTusk.png";
import sunset from "../src/images/sunset.png";
import footballPitch from "../src/images/footballPitch.JPG";

const About = () => {

    return (
        <section className="lg:pt-24 lg:ml-24 pt-28 ml-10">
            <h1 className="lg:text-8xl text-5xl font-interTight font-bold ">About <span className="text-gray-400 fadeIn">me</span></h1> 

            <p className="lg:pt-10 pt-5 text-md lg:text-xl font-interTight text-balance lg:mr-44">I'm Faaiz 👋🏻. Currently in my third year studying Computing Science and Interactive Systems at Simon Fraser University, 
                where I specialize in game development and front-end design. 
                My coursework blends technical skills with creativity, 
                allowing me to explore everything from coding dynamic interfaces to creating engaging user experiences. 
                Through hands-on projects, I'm building a solid foundation in 
                developing intuitive applications that prioritize usability and innovation.
            </p>
                
            <p className="lg:pt-7 pt-8 lg:text-xl text-md font-interTight text-balance lg:mr-44">I'm passionate about front-end development, game development, and full-stack application development. 
                My projects have involved technologies like Java, C++, React.js, JavaScript, Node.js, Python, and MongoDB, 
                allowing me to enhance my technical skills and gain insight into creating user-focused applications.
            </p>

            <p className="lg:pt-7 pt-8 lg:text-xl text-md font-interTight text-balance lg:mr-56">
                I am currently pursuing a co-op position in software development for 2025. I am excited to apply my knowledge in Computer Science and Interactive Systems in a hands-on environment.
                I'm looking forward to growing alongside industry professionals and making a meaningful impact through technology-driven projects.
            </p>

            <div className="mt-14 ">
                <h1 className="text-4xl font-interTight font-semibold" > Personal <span className="text-gray-400 font-interTight font-semibold fadeIn">life</span> </h1>
            
                <p className="font-interTight lg:mt-2 text-xl text-balance lg:mr-56 lg:mb-6 ">
                    I grew up in Canada and have always been passionate about technology, which led me to explore and eventually pursue a career in this exciting field. 
                    I'm lucky to call Vancouver my home — one of the most beautiful cities in the world, surrounded by mountains, ocean, and vibrant city life. 
                    When I'm not coding or working on new projects, you'll probably find me playing football (soccer), trying a new recipe in the kitchen, or hanging out with friends. 
                </p>

                {/* images */}
                <div className="mt-5 lg:flex gap-10 mb-2">
                    <div className="mb-10"><img src={blackTusk} alt="blacktusk" className="h-96 w-72 shadow-lg shadow-black rounded-xl hover:-translate-y-4 ease-in-out duration-500"></img></div>
                    <div className="mb-10"><img src={sunset} alt="blacktusk" className="h-96 shadow-lg shadow-black rounded-xl hover:-translate-y-4 ease-in-out duration-500"></img></div>
                    <div className="mb-10 "><img src={footballPitch} alt="blacktusk" className="h-96 shadow-lg shadow-black rounded-xl hover:-translate-y-4 ease-in-out duration-500"></img></div>
                </div>
            
            </div>

        </section>
    );

}

export default About;