import React, { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("success");
    
    console.log("Dados enviados para pedro.s.teixeira@ufv.br:", formData);
    
    setTimeout(() => {
      setFormData({
        nome: "",
        email: "",
        telefone: "",
        mensagem: "",
      });
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <section className="bg-gray-800" id ="contato">
      <div className="flex items-center flex-col justify-center text-center px-4">
        <div className="text-xs text-white text-opacity-50 mt-12 font-bold mb-4">
          CONTATO
        </div>
        <div className="text-5xl text-white">Entre em Contato</div>
        <div className="mt-8 w-16 h-1 bg-white bg-opacity-50 rounded-full mb-8"></div>

        <div className="p-6 text-center flex flex-col items-center text-white">
          <p>Estou ansioso para ouvir você!</p>
        </div>      
      </div>

      <div className="py-12 px-4 rounded-lg max-w-2xl mx-auto">
    

        {submitStatus === "success" ? (
          <div className="bg-green-900 border-l-4 border-green-500 text-green-100 p-4 mb-6" role="alert">
            <p className="font-bold">Mensagem enviada!</p>
            <p>Obrigado pelo seu contato. Retornaremos em breve.</p>
          </div>
        ) : null}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="nome" className="block text-white font-medium mb-2">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full pb-2 bg-transparent border-b-2 border-gray-500 focus:border-blue-400 text-white focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full pb-2 bg-transparent border-b-2 border-gray-500 focus:border-blue-400 text-white focus:outline-none transition-colors"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="telefone" className="block text-white font-medium mb-2">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              className="w-full pb-2 bg-transparent border-b-2 border-gray-500 focus:border-blue-400 text-white focus:outline-none transition-colors"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="mensagem" className="block text-white font-medium mb-2">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="4"
              className="w-full pb-2 bg-transparent border-b-2 border-gray-500 focus:border-blue-400 text-white focus:outline-none transition-colors"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex justify-center mt-8 px-6 py-2 bg-white text-black border-2 border-transparent hover:bg-black hover:text-white hover:border-white transition-all duration-300 ease-out rounded-md font-medium transform hover:-translate-y-1"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>

        <div className="mt-10 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-around text-center">
            <div className="mb-4 md:mb-0">
              <div className="text-blue-400 text-xl mb-2">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3 className="font-semibold text-white">Endereço</h3>
              <p className="text-white">Santo Antônio</p>
              <p className="text-white">Viçosa - MG</p>
            </div>
            
            <div className="mb-4 md:mb-0">
              <div className="text-blue-400 text-xl mb-2">
                <i className="fas fa-phone"></i>
              </div>
              <h3 className="font-semibold text-white">Telefone</h3>
              <p className="text-white">(74) 99934-7208</p>
            </div>
            
            <div>
              <div className="text-blue-400 text-xl mb-2">
                <i className="fas fa-envelope"></i>
              </div>
              <h3 className="font-semibold text-white">Email</h3>
              <p className="text-white">pedro.s.teixeira@ufv.br</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
