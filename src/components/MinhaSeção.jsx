import React from "react";
import Algoritmos from "./Algoritmos";
import imagem1 from "../assets/projeto1.png"

function MinhaSeção() {

  const meusAlgoritmos = [
    {
      imagem: imagem1,
      data: "10 Março, 2025",
      titulo: "1",
      githubLink: "https://github.com/pedrot00"
    },
    {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "2",
        githubLink: "https://github.com/pedrot00"
      },
      {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "3",
        githubLink: "https://github.com/pedrot00"
      },
      {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "4",
        githubLink: "https://github.com/pedrot00"
      },
      {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "5",
        githubLink: "https://github.com/pedrot00"
      },
      {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "5",
        githubLink: "https://github.com/pedrot00"
      },
      {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "5",
        githubLink: "https://github.com/pedrot00"
      },
  ];

  return (
    <div>
      <Algoritmos algoritmos={meusAlgoritmos} />
    </div>
  );
}

export default MinhaSeção;