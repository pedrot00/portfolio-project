import React, { useState, useRef } from "react";
import Algoritmo from "./Algoritmo";

const Algoritmos = ({ algoritmos = [] }) => {
  const [currentDesktopPage, setCurrentDesktopPage] = useState(0);
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const carouselRef = useRef(null);

  // Número de itens visíveis em diferentes tamanhos de tela
  const itemsPerPage = {
    mobile: 1,
    desktop: 3
  };

  // Total de páginas no carrossel
  const totalDesktopPages = Math.ceil(algoritmos.length / itemsPerPage.desktop);

  // Manipuladores de navegação para desktop
  const prevDesktop = () => {
    setCurrentDesktopPage((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return totalDesktopPages - 1; // Volta para o último grupo
      }
    });
  };

  const nextDesktop = () => {
    setCurrentDesktopPage((prevIndex) => {
      if (prevIndex < totalDesktopPages - 1) {
        return prevIndex + 1;
      } else {
        return 0; // Volta para o primeiro grupo
      }
    });
  };

  // Manipuladores de navegação para mobile
  const prevMobile = () => {
    setCurrentMobileIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return algoritmos.length - 1; // Volta para o último item
      }
    });
  };

  const nextMobile = () => {
    setCurrentMobileIndex((prevIndex) => {
      if (prevIndex < algoritmos.length - 1) {
        return prevIndex + 1;
      } else {
        return 0; // Volta para o primeiro item
      }
    });
  };

  // Manipuladores de navegação unificados
  const prev = () => {
    // Usar a função apropriada dependendo do viewport
    if (window.innerWidth >= 768) {
      prevDesktop();
    } else {
      prevMobile();
    }
  };

  const next = () => {
    // Usar a função apropriada dependendo do viewport
    if (window.innerWidth >= 768) {
      nextDesktop();
    } else {
      nextMobile();
    }
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
      className="md:mt-0"
    >
      <div className="flex items-center flex-col justify-center text-center px-4">
        <div className="text-xs text-white text-opacity-50 mt-12 font-bold mb-4">
          ALGORITMOS
        </div>
        <div className="text-5xl text-white">Algoritmos Desenvolvidos</div>
        <div className="mt-8 w-16 h-1 bg-white bg-opacity-50 rounded-full mb-8"></div>

        <div className="p-6 text-center flex flex-col items-center text-white">
          <p>Uma coleção de algoritmos essenciais para a minha trajetória como desenvolvedor.</p>
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
          {/* Desktop View */}
          <div 
            className="hidden md:flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentDesktopPage * 100}%)` 
            }}
          >
            {/* Desktop: agrupar algoritmos em conjuntos de 3 */}
            {Array.from({ length: totalDesktopPages }).map((_, pageIndex) => (
              <div 
                key={`page-${pageIndex}`}
                className="w-full min-w-full flex-shrink-0 flex justify-center"
              >
                <div className="grid grid-cols-3 gap-4 w-full max-w-6xl">
                  {algoritmos
                    .slice(
                      pageIndex * itemsPerPage.desktop,
                      Math.min((pageIndex + 1) * itemsPerPage.desktop, algoritmos.length)
                    )
                    .map((algoritmo, algIndex) => (
                      <div key={`desktop-${pageIndex}-${algIndex}`} className="w-full">
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
            ))}
          </div>

          {/* Mobile View */}
          <div 
            className="flex md:hidden transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentMobileIndex * 100}%)` 
            }}
          >
            {/* Mobile: exibir um por vez */}
            {algoritmos.map((algoritmo, index) => (
              <div 
                key={`mobile-${index}`}
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
          {/* Indicadores para desktop - baseados nas páginas */}
          <div className="hidden md:flex">
            {Array.from({ length: totalDesktopPages }).map((_, index) => (
              <button
                key={`desktop-indicator-${index}`}
                onClick={() => setCurrentDesktopPage(index)}
                className={`h-2 w-8 mx-1 rounded-full transition-colors duration-300 ${
                  currentDesktopPage === index ? "bg-blue-500" : "bg-gray-400"
                } hover:bg-blue-300`}
                aria-label={`Ir para grupo ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Indicadores para mobile - baseados nos itens individuais */}
          <div className="flex md:hidden">
            {algoritmos.map((_, index) => (
              <button
                key={`mobile-indicator-${index}`}
                onClick={() => setCurrentMobileIndex(index)}
                className={`h-2 w-2 mx-1 rounded-full transition-colors duration-300 ${
                  currentMobileIndex === index ? "bg-blue-500" : "bg-gray-400"
                } hover:bg-blue-300`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Algoritmos;