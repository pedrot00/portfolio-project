import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Projetos from "./components/Projetos";

function App() {
  return (
    <div className="pt-20 overflow-hidden">
      <Header />
      <About />
      <Projetos />
    </div>
  );
}

export default App;
