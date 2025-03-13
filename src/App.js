import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Projetos from "./components/Projetos";
import MinhaSeção from "./components/MinhaSeção";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import Formacao from "./components/Formacao";

function App() {
  return (
    <div className="pt-20 overflow-hidden">
      <Header />
      <About />
      <Projetos />
      <Formacao />
      <MinhaSeção />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
