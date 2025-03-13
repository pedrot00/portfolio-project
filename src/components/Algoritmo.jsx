import React from "react";

const Algoritmo = ({ imagem, data, titulo, descricao, githubLink, demoLink }) => {
  return (
    <div className="flex flex-col items-center px-4 py-6">
      {/* Card principal com altura consideravelmente maior para desktop */}
      <div className="w-full max-w-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
        {/* Container da imagem com proporção retangular vertical - altura MUITO aumentada */}
        <div className="relative h-96 md:h-160 overflow-hidden">
          {/* Imagem de fundo que cobre todo o espaço usando object-cover */}
          <img 
            className="absolute inset-0 w-full h-full object-cover"
            src={imagem}
            alt={titulo}
          />
          
          {/* Overlay com botões que aparece no hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100">
            <div className="flex space-x-4">
              {/* Link para o GitHub */}
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="rounded-full p-3 w-12 h-12 flex items-center justify-center transition-colors hover:bg-indigo-500"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              )}
              
              {/* Link para o demo */}
              {demoLink && (
                <a 
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-3 w-12 h-12 flex items-center justify-center transition-colors hover:bg-indigo-500"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="28" 
                    height="28" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Conteúdo separado da imagem */}
      <div className="text-center mt-4 px-2 max-w-sm">
        {/* Data em uma caixinha colorida */}
        <div className="flex justify-center mb-3">
          <span className="inline-block bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
            {data}
          </span>
        </div>
        
        {/* Título */}
        <h3 className="font-bold text-xl mb-2">{titulo}</h3>
        
        {/* Descrição */}
        <p className="text text-white">
          {descricao}
        </p>
      </div>
    </div>
  );
};

export default Algoritmo;