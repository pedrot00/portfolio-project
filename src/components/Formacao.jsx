import React from "react";

const Formacao = () => {
  // Dados de formação definidos diretamente no componente
  const formacoes = [
    {
      ano: "2024",
      curso: "Bacharelado em Ciência da Computação",
      tipo: "Graduação - Em andamento",
      instituicao: "Universidade Federal de Viçosa (UFV)",
      descricao: "Especialização em Inteligência Artificial e Aprendizado de Máquina, com foco em aplicações práticas para soluções de problemas reais.",
      habilidades: ["C/C++", "JavaScript", "TypeScript", "React.js", "Tailwind", "Node.js", "Git", "POO", "Lógica de programação"]
    },
    {
      ano: "2020",
      curso: "Técnico em Informática",
      tipo: "Técnico - Finalizado",
      instituicao: "IFBA - Campus Irecê",
      descricao: "Curso técnico focado em fundamentos e lógica de programação e desenvolvimento de sistemas.",
      habilidades: ["C/C++", "Java", "HTML/CSS", "JavaScript", "MySQL", "POO", "Lógica de programação", "Análise de sistemas", "Rede de computadores",]
    }
  ];

  return (
    <section id="formacao" className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12 text-center">
          <h3 className="text-xs uppercase tracking-widest font-bold text-white text-opacity-50 mb-4">
            FORMAÇÃO ACADÊMICA
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Minha Trajetória
          </h2>
          <div className="w-16 h-1 bg-white bg-opacity-50 rounded-full mb-8"></div>
          <p className="text-gray-300 max-w-2xl">
            Conheça minha formação acadêmica e os conhecimentos que adquiri ao longo da minha jornada.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {formacoes.map((formacao, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0 "
            >
              {/* Linha de conexão vertical entre itens */}
              {index !== formacoes.length - 1 && (
                <div className="absolute left-6 top-10 bottom-0 w-0.5 bg-blue-700/30"></div>
              )}

              <div className="flex flex-col md:flex-row gap-4">
                {/* Círculo marcador e ano */}
                <div className="flex flex-col items-center mr-4 pt-2">
                  <div className="flex flex-shrink-0 items-center justify-center w-12 h-12  bg-indigo-700 rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/30">
                    <span className="text-sm font-bold ">{formacao.ano}</span>
                  </div>
                </div>

                {/* Card com informações */}
                <div className="flex-grow bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {formacao.curso}
                    </h3>
                    <span className="mt-2 md:mt-0 px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                      {formacao.tipo}
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="text-gray-300 flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h8a1 1 0 011 1z" clipRule="evenodd"></path>
                      </svg>
                      {formacao.instituicao}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-4">{formacao.descricao}</p>

                  {formacao.habilidades && formacao.habilidades.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {formacao.habilidades.map((habilidade, hIndex) => (
                        <span
                          key={hIndex}
                          className="text-xs px-3 py-1 rounded-full bg-blue-500/10  bg-indigo-700"
                        >
                          {habilidade}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formacao;