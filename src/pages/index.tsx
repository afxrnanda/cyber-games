import React from "react";
import Carrossel from "@/components/Carrossel";
import Header from "@/components/Header";
import Container from "@/components/Container";

export default function App() {
  return (
    <div className="bg-verde-claro-800">
      <Header></Header>
      <Container>
        <div className="flex justify-center">
          <img src="balao.svg" alt="" className="ml-14 w-80" />
          <img src="Cybér 1.2.4.png" alt="imagem do cibér" className="mt-20 h-80"/>
        </div>
      </Container>
      <Carrossel></Carrossel>
    </div>
  );
}

