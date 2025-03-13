import React from "react";
import "./App.css";

import Header from "./components/Header";
import About from "./components/About";
import Projetos from "./components/Projetos";
import Algoritmos from "./components/Algoritmos";
import MinhaSeção from "./components/MinhaSeção";

function App() {
  return (
    <div className="pt-20 overflow-hidden">
      <Header />
      <About />
      <Projetos />
      <MinhaSeção />
    </div>
  );
}

export default App;
