import React from "react";
import mainFoto from "../assets/mainFoto.jpeg";

const About = () => {
  return (
    <section 
      id="sobre" 
      className="self-center flex-col md:flex-row-reverse justify-center items-center md:mt-32"
    > 
      <div className="flex flex-col md:flex-row-reverse justify-center items-center p-4 md:mr-52 md:mt-0 transform translate-y-[-10%]">
        <div className="flex flex-col items-center p-3 md:w-2/5">
          <img 
            src={mainFoto} 
            alt="mainFoto" 
            className="bg-cover md:w-2/3 md:rounded-full" 
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

        <div className="flex flex-col items-start md:w-1/2 md:items-center">
          <div className="text-xs text-white text-opacity-50 font-bold ml-2 mb-4 flex md:self-center">
            SOBRE MIM
          </div>
          <h1 className="text-5xl mb-4 md:text-6xl md:self-center md:text-center">
            Pedro Santos <br /> Teixeira
          </h1>

          <div className="h-0.5 bg-gray-400 w-1/2 my-4"></div>  {/* Linha reta */}
          <p className="text-[#808080] md:w-3/4 md:text-center">
            Nascido na Bahia, sempre fui movido pela curiosidade pela tecnologia. Aos 15 anos, descobri na programação um universo infinito de criações e desafios. Ao longo da minha trajetória, conheci pessoas e ferramentas que transformaram essa paixão na minha vocação!
          </p>
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:w-3/4">
            {/* HTML */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.08 0L4.632 5.16H18.765L18.408 9.12H4.275L3.815 14.28H17.947L17.325 20.28L11.815 21.72L6.855 20.28L7.223 16.8H2.064L1.328 24L11.815 27L23.02 24L24 0H5.08Z" fill="#E44D26"/>
              </svg>
            </div>
            
            {/* CSS */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.08 0L4.632 5.16H18.765L18.408 9.12H4.275L3.815 14.28H17.947L17.325 20.28L11.815 21.72L6.855 20.28L7.223 16.8H2.064L1.328 24L11.815 27L23.02 24L24 0H5.08Z" fill="#1572B6"/>
              </svg>
            </div>
            
            {/* JavaScript */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-yellow-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M0 0H24V24H0V0Z" fill="#F7DF1E"/>
                <path d="M6.24 20.04L8.04 18.96C8.4 19.68 8.76 20.28 9.6 20.28C10.44 20.28 10.92 19.92 10.92 18.6V10.92H13.2V18.6C13.2 21 11.76 22.08 9.72 22.08C7.92 22.08 6.72 21.12 6.24 20.04Z" fill="black"/>
                <path d="M14.52 19.8L16.32 18.72C16.8 19.56 17.4 20.16 18.6 20.16C19.56 20.16 20.16 19.68 20.16 19.08C20.16 18.36 19.56 18 18.36 17.4L17.76 17.16C15.96 16.32 14.76 15.24 14.76 13.2C14.76 11.28 16.32 9.84 18.48 9.84C20.04 9.84 21.12 10.32 21.96 11.76L20.28 12.96C19.92 12.24 19.56 11.88 18.48 11.88C17.4 11.88 16.92 12.36 16.92 12.96C16.92 13.68 17.4 14.04 18.48 14.64L19.08 14.88C21.24 15.84 22.44 16.92 22.44 19.08C22.44 21.36 20.64 22.32 18.6 22.32C16.68 22.32 15.12 21.36 14.52 19.8Z" fill="black"/>
              </svg>
            </div>
            
            {/* React */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-cyan-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 13.792C13.3256 13.792 14.398 12.7195 14.398 11.394C14.398 10.0684 13.3256 8.996 12 8.996C10.6744 8.996 9.60199 10.0684 9.60199 11.394C9.60199 12.7195 10.6744 13.792 12 13.792Z" fill="#61DAFB"/>
                <path d="M12 16.542C5.373 16.542 0 14.279 0 11.394C0 8.51 5.373 6.246 12 6.246C18.627 6.246 24 8.51 24 11.394C24 14.279 18.627 16.542 12 16.542ZM12 7.747C6.175 7.747 1.5 9.683 1.5 11.394C1.5 13.106 6.175 15.042 12 15.042C17.825 15.042 22.5 13.106 22.5 11.394C22.5 9.683 17.825 7.747 12 7.747Z" fill="#61DAFB"/>
                <path d="M7.52588 21.566C7.04688 21.566 6.62988 21.452 6.28088 21.222C4.86288 20.335 4.45288 17.226 5.37888 13.399C7.15088 7.143 10.7429 3.02 12.5969 3.028C13.0769 3.029 13.4949 3.145 13.8389 3.373C15.2569 4.26 15.6669 7.369 14.7409 11.196C12.9689 17.452 9.37688 21.566 7.52588 21.566ZM12.1409 4.53C10.5389 4.774 7.78188 8.552 6.29988 13.651C5.53688 16.879 5.96988 19.243 6.73188 19.722C7.49388 20.2 9.83988 19.501 12.7859 14.935C13.5499 11.707 13.1159 9.343 12.3539 8.865C12.1379 8.736 11.8959 8.677 11.5969 8.677L12.1409 4.53Z" fill="#61DAFB"/>
                <path d="M16.474 21.566C14.623 21.566 11.031 17.452 9.25903 11.196C8.33303 7.369 8.74303 4.26 10.161 3.373C10.5 3.146 10.9129 3.028 11.4619 3.028C13.3119 3.028 16.9049 7.143 18.677 13.399C19.603 17.226 19.193 20.335 17.775 21.222C17.4439 21.44 17.0019 21.557 16.474 21.566ZM11.4619 4.528C11.2729 4.528 11.0289 4.587 10.798 4.725C10.041 5.203 9.59903 7.567 10.3679 10.795C11.8499 15.894 14.607 19.672 16.209 19.443C16.997 19.252 17.438 16.888 16.7 13.66C15.218 8.562 12.4599 4.783 10.8579 4.539L11.4619 4.528Z" fill="#61DAFB"/>
              </svg>
            </div>
            
            {/* TypeScript */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-blue-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M0 12V0H24V24H0V12Z" fill="#3178C6"/>
                <path d="M13.808 19.021V21.954C14.1709 22.1442 14.5614 22.282 14.965 22.362C15.433 22.461 15.911 22.51 16.39 22.508C16.862 22.51 17.333 22.456 17.792 22.347C18.199 22.253 18.587 22.088 18.939 21.858C19.2638 21.6381 19.5313 21.343 19.718 20.998C19.9236 20.5961 20.0254 20.1456 20.013 19.69C20.0306 19.2329 19.9291 18.7792 19.719 18.37C19.5121 17.9969 19.2175 17.6783 18.859 17.441C18.4454 17.1747 17.9982 16.9617 17.529 16.808C17.0643 16.6561 16.5906 16.5345 16.111 16.444C15.794 16.383 15.488 16.293 15.199 16.176C14.9725 16.0793 14.7672 15.9371 14.596 15.759C14.4711 15.612 14.3781 15.4378 14.324 15.25C14.2639 15.0428 14.2363 14.8264 14.242 14.61C14.2338 14.3895 14.2796 14.17 14.375 13.971C14.4688 13.7745 14.6078 13.6047 14.78 13.476C14.9795 13.3258 15.2078 13.2177 15.45 13.158C15.7334 13.0831 16.0255 13.0474 16.318 13.052C16.5731 13.0495 16.828 13.0684 17.079 13.108C17.3223 13.1435 17.5595 13.2059 17.785 13.294C18.0038 13.3841 18.2089 13.5017 18.395 13.644C18.5843 13.7897 18.7509 13.9627 18.889 14.157L20.33 12.83C20.0821 12.489 19.7694 12.2009 19.41 11.98C19.0507 11.7576 18.6538 11.6017 18.24 11.52C17.7681 11.4221 17.2875 11.373 16.805 11.373C16.3225 11.373 15.8419 11.4221 15.37 11.52C14.9376 11.6035 14.5275 11.7829 14.17 12.045C13.8246 12.3007 13.546 12.636 13.36 13.02C13.155 13.4637 13.0523 13.9515 13.06 14.443C13.0495 14.8663 13.1282 15.2872 13.29 15.68C13.4465 16.0394 13.6856 16.3573 13.989 16.605C14.2941 16.8519 14.6374 17.0471 15.006 17.182C15.3715 17.318 15.746 17.429 16.127 17.514C16.4995 17.5905 16.8671 17.69 17.227 17.812C17.5032 17.9043 17.7604 18.048 17.984 18.236C18.151 18.3828 18.282 18.5687 18.365 18.78C18.444 18.9897 18.482 19.2138 18.478 19.439C18.4865 19.6712 18.429 19.9007 18.312 20.102C18.1941 20.2991 18.0314 20.4622 17.839 20.576C17.61 20.7055 17.3611 20.7943 17.103 20.839C16.7864 20.9041 16.463 20.9328 16.139 20.925C15.5121 20.9278 14.894 20.7931 14.331 20.53C13.8307 20.3 13.3769 19.9656 13 19.548L13.808 19.021ZM10.254 13.845H12.625V12.041H5.52V13.845H7.875V22.33H10.254V13.845Z" fill="white"/>
              </svg>
            </div>
            
            {/* Tailwind */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-teal-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.409 8.437 11.953 8.99 12.558 9.603C13.547 10.608 14.704 11.8 17.4 11.8C19.8 11.8 21.3 10.6 21.9 8.2C21 9.4 19.95 9.85 18.75 9.55C17.991 9.363 17.447 8.81 16.842 8.197C15.853 7.192 14.696 6 12 6ZM7.5 12C5.1 12 3.6 13.2 3 15.6C3.9 14.4 4.95 13.95 6.15 14.25C6.909 14.437 7.453 14.99 8.058 15.603C9.047 16.608 10.204 17.8 12.9 17.8C15.3 17.8 16.8 16.6 17.4 14.2C16.5 15.4 15.45 15.85 14.25 15.55C13.491 15.363 12.947 14.81 12.342 14.197C11.353 13.192 10.196 12 7.5 12Z" fill="#06B6D4"/>
              </svg>
            </div>
            
            {/* Node */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11.9999 24C11.7369 24 11.4739 23.937 11.2359 23.799L8.33989 22.07C7.96589 21.866 8.14789 21.788 8.26589 21.749C8.87389 21.535 8.99989 21.473 9.49589 21.187C9.55789 21.152 9.63489 21.164 9.69689 21.199L11.9999 22.632C12.0739 22.679 12.1719 22.679 12.2459 22.632L20.4999 17.878C20.5739 17.83 20.6239 17.747 20.6239 17.652V8.144C20.6239 8.049 20.5739 7.966 20.4999 7.917L12.2459 3.163C12.1719 3.115 12.0739 3.115 11.9999 3.163L3.74589 7.917C3.67189 7.966 3.62189 8.049 3.62189 8.144V17.652C3.62189 17.747 3.67189 17.83 3.74589 17.878L6.02989 19.191C7.36589 19.859 8.14789 19.097 8.14789 18.335V9.003C8.14789 8.872 8.25389 8.777 8.38589 8.777H9.40589C9.53789 8.777 9.64389 8.872 9.64389 9.003V18.335C9.64389 20.089 8.69989 21.128 7.06589 21.128C6.56989 21.128 6.16989 21.128 5.02789 20.566L2.83789 19.312C2.35789 19.037 2.05786 18.523 2.05786 17.964V7.831C2.05786 7.272 2.35789 6.758 2.83789 6.483L11.0919 1.729C11.5599 1.467 12.1779 1.467 12.6459 1.729L20.8999 6.483C21.3799 6.758 21.6799 7.272 21.6799 7.831V17.964C21.6799 18.523 21.3799 19.037 20.8999 19.312L12.6459 24.066C12.4079 24.204 12.1449 24.267 11.8819 24.267L11.9999 24ZM14.1379 17.615C10.5139 17.615 9.67189 16.093 9.67189 14.775C9.67189 14.644 9.77789 14.549 9.90989 14.549H10.9539C11.0739 14.549 11.1679 14.632 11.1679 14.751C11.3949 15.789 11.9279 16.295 14.1499 16.295C15.9379 16.295 16.7319 15.895 16.7319 14.894C16.7319 14.287 16.4959 13.855 13.4799 13.567C10.9779 13.326 9.40589 12.818 9.40589 10.908C9.40589 9.129 10.8999 8.025 13.7819 8.025C17.0219 8.025 18.3819 9.057 18.5219 11.168C18.5219 11.229 18.4959 11.289 18.4599 11.348C18.4239 11.396 18.3639 11.433 18.3039 11.433H17.2479C17.1399 11.433 17.0459 11.361 17.0339 11.253C16.7199 9.945 15.9979 9.346 13.7819 9.346C11.7899 9.346 11.1679 10.028 11.1679 10.848C11.1679 11.803 11.8929 12.079 14.7439 12.449C17.5709 12.818 18.4839 13.302 18.4839 15.175C18.4839 17.103 16.8979 17.615 14.1379 17.615Z" fill="#539E43"/>
              </svg>
            </div>
            
            {/* Git */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-orange-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M23.546 10.93L13.067 0.452C12.476 -0.139 11.5141 -0.139 10.922 0.452L8.764 2.61L11.54 5.385C12.1672 5.185 12.881 5.30815 13.373 5.8L13.374 5.801C13.8652 6.29332 13.9881 7.01005 13.784 7.638L16.458 10.312C17.0861 10.1075 17.8016 10.2301 18.294 10.723C18.9492 11.3789 18.9492 12.4235 18.294 13.0793C17.6389 13.7344 16.5944 13.7344 15.9385 13.0793C15.423 12.5647 15.3112 11.7962 15.588 11.1282L13.092 8.6333L13.091 15.4573C13.248 15.5348 13.3944 15.6374 13.526 15.7681C14.1812 16.4232 14.1812 17.4678 13.526 18.1236C12.8709 18.7787 11.8264 18.7787 11.1705 18.1236C10.5154 17.4685 10.5154 16.4239 11.1705 15.7688C11.3389 15.6009 11.5339 15.475 11.744 15.392L11.7439 8.50892C11.5543 8.42582 11.3807 8.31182 11.2268 8.15662C10.7048 7.63555 10.5964 6.84172 10.8846 6.16352L8.15649 3.43532L0.452102 11.139C-0.138944 11.731 -0.138944 12.6918 0.452102 13.284L10.93 23.763C11.5209 24.354 12.4828 24.354 13.075 23.763L23.545 13.292C24.1371 12.7 24.1371 11.739 23.546 10.93Z" fill="#F05032"/>
              </svg>
            </div>
            
            {/* C */}
            <div className="rounded-full p-2 border border-gray-300 hover:border-blue-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M16.5921 9.1965C13.3571 7.36333 8.32094 7.59829 5.01498 9.75239C1.39302 12.1086 0.648479 15.9205 2.45823 18.7126C4.32699 21.6037 8.53394 22.7417 12.1554 20.4167C14.6444 18.8124 15.8148 16.0866 15.3841 13.2959" stroke="#5C8DBC" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M10.6139 12.7217H13.6851V15.7929" stroke="#1A4674" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M19.6636 7.17398L12.1554 3L4.64713 7.17398V15.5222L12.1554 19.6962L19.6636 15.5222V7.17398Z" stroke="#1A4674" stroke-width="2" stroke-miterlimit="10"/>
              </svg>
            </div>
            
        
        </div>
          
          {/* Botão Contate-me */}
          <a 
            href="https://wa.me/5574999347208" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex md:self-center mt-8 md:mt-12 px-6 py-2 bg-white text-black border-2 border-transparent 
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