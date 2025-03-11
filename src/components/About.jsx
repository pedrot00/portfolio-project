import React from "react";
import mainFoto from "../assets/mainFoto.png";

const About = () => {
  return (
    <section 
      id="sobre" 
      className="self-center flex-col md:flex-row-reverse justify-center items-center md:mt-32"
    > 
      <div className="flex flex-col md:flex-row-reverse justify-center items-center p-4 md:mr-52 md:mt-0 transform translate-y-[-10%]">
        <div className="flex flex-col items-center p-3 md:w-1/2">
          <img 
            src={mainFoto} 
            alt="mainFoto" 
            className="bg-contain md:w-2/3 md:rounded-full " 
          />

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">

            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/pedro-santos-teixeira/" className="rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-200 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-colors">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            
            {/* GitHub Icon */}
            <a href="https://github.com/pedrot00" className="rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-200 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-colors">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            
            {/* Instagram Icon */}
            <a href="https://www.instagram.com/pedrot_s/" className="rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-gray-200 group transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#808080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-black transition-colors">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col items-start md:w-1/2 md:items-end">
          <div className="text-xs text-white text-opacity-50 font-bold ml-2 mb-4 flex md:self-center md:ml-14">
            ABOUT ME
          </div>
          <h1 className="text-5xl mb-4 md:text-6xl md:self-center md:ml-72">
            Noah <br /> Henderson
          </h1>

          <div className="h-0.5 bg-gray-400 w-1/2 my-4"></div>  {/* Linha reta */}
          <p className="text-[#808080] md:w-1/2">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth. 
            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.
          </p>
          
          {/* Botão Contate-me */}
          <a 
            href="https://wa.me/5574999347208" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex md:self-center md:ml-32 mt-8 md:mt-12 px-6 py-2 bg-white text-black border-2 border-transparent 
                      hover:bg-black hover:text-white hover:border-white 
                      transition-all duration-300 ease-out rounded-md font-medium transform hover:-translate-y-1"
          >
            Contate-me
          </a>

        </div>
      </div>
    </section>
  );
};

export default About;