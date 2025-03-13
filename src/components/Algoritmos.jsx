import React, { useState, useRef } from "react";
import Algoritmo from "./Algoritmo";

const Algoritmos = ({ algoritmos = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const carouselRef = useRef(null);

  // Manipuladores de navegação
  const prev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return algoritmos.length - 1; // Volta para o último slide
      }
    });
  };

  const next = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < algoritmos.length - 1) {
        return prevIndex + 1;
      } else {
        return 0; // Volta para o primeiro slide
      }
    });
  };

  // Manipuladores de toque para dispositivos móveis
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  if (algoritmos.length === 0) {
    return null;
  }

  return (
    <section
      id="algoritmos"
      className="md:mt-56"
    >
      <div className="flex items-center flex-col justify-center text-center px-4">
        <div className="text-xs text-white text-opacity-50 mt-12 font-bold mb-4">
          ALGORITMOS
        </div>
        <div className="text-5xl text-white">Algoritmos Populares</div>

        <div className="p-6 text-center flex flex-col items-center text-white">
          <p>Uma coleção de algoritmos essenciais para o desenvolvimento de software.</p>
          <p>Explore e aprenda com exemplos práticos.</p>
        </div>      
      </div>

      <div className="relative px-4 pb-12">
        {/* Navegação para Mobile - na parte superior */}
        <div className="flex justify-between mb-4 md:hidden">
          <button 
            onClick={prev}
            className="bg-black rounded-full p-2 shadow-md z-10 hover:bg-gray-800 transition-colors duration-300"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={next}
            className="bg-black rounded-full p-2 shadow-md z-10 hover:bg-gray-800 transition-colors duration-300"
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navegação para Desktop - ao lado da imagem */}
        <div className="hidden md:block">
          <button 
            onClick={prev}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md z-10 hover:bg-gray-800 transition-colors duration-300"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={next}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2 shadow-md z-10 hover:bg-gray-800 transition-colors duration-300"
            aria-label="Próximo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Container do carrossel */}
        <div 
          ref={carouselRef}
          className="overflow-hidden relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * 100}%)` 
            }}
          >
            {algoritmos.map((algoritmo, index) => (
              <div 
                key={index} 
                className="w-full min-w-full px-4 flex-shrink-0"
              >
                <Algoritmo
                  imagem={algoritmo.imagem}
                  data={algoritmo.data}
                  titulo={algoritmo.titulo}
                  descricao={algoritmo.descricao}
                  githubLink={algoritmo.githubLink}
                  demoLink={algoritmo.demoLink}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-4">
          {algoritmos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 mx-1 rounded-full transition-colors duration-300 ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-400"
              } hover:bg-blue-300`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Algoritmos;