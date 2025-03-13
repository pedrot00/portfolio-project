import React from "react";
import Algoritmos from "./Algoritmos";
import imagem1 from "../assets/projeto1.png"

function MinhaSeção() {

  const meusAlgoritmos = [
    {
      imagem: imagem1,
      data: "10 Março, 2025",
      titulo: "1",
    },
    {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "2",
        descricao: "dawdpijawkidodadwadwadwadwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawawjdwaiodjawiodajwdawawdwadaw"
      },
      {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "3",
      },
      {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "4",
      },
      {
        imagem: imagem1,
        data: "10 Março, 2025",
        titulo: "5",
      },
  ];

  return (
    <div>
      <Algoritmos algoritmos={meusAlgoritmos} />
    </div>
  );
}

export default MinhaSeção;