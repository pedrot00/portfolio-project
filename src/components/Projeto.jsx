import React, { useState } from "react";

const Projeto = ({ imagem, descricao, githubLink, siteLink }) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const openImageModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsImageModalOpen(true);
  };

  const closeImageModal = () => {
    setIsImageModalOpen(false);
  };

  return (
    <>
      <section className="m-6 relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer">
        <div className="relative h-full w-full">
          {/* Imagem do projeto */}
          <img 
            className="w-full h-full object-cover"
            src={imagem}
            alt={descricao}
          />
          
          {/* Overlay que aparece no hover */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
            <div className="flex space-x-6">
              {/* Link para o GitHub */}
              <a 
                href={githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-full p-2 w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-200 group transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#808080" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="group-hover:stroke-black transition-colors"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              
              {/* Link para o site */}
              <a 
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-200 group transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#808080" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="group-hover:stroke-black transition-colors"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
              
              {/* Botão para ampliar a imagem */}
              <button 
                onClick={openImageModal}
                className="rounded-full p-2 w-10 h-10 flex items-center justify-center bg-white hover:bg-gray-200 group transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="#808080" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="group-hover:stroke-black transition-colors"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para visualização ampliada da imagem */}
      {isImageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeImageModal}>
          <div className="relative max-w-4xl max-h-screen p-4">
            <button 
              className="absolute top-4 right-4 p-2 rounded-full bg-white"
              onClick={closeImageModal}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <img 
              src={imagem} 
              alt={descricao} 
              className="max-h-screen max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Projeto;