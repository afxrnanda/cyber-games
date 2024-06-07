import React from "react";
import Carrossel from "@/components/Carrossel";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Galeria from "@/components/Galeria";
import { ChakraProvider } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
    <div className="bg-verde-claro-800">
      <Header></Header>
      <Container>
        <div className="flex justify-center">
          <img src="balao.svg" alt="" className="ml-8 mt-6 w-32 sm:ml-10 sm:mt-4 sm:w-60 md:ml-14 md:mt-0 md:w-80" />
          <img src="Cybér 1.2.4.png" alt="imagem do cibér" className="mt-14 h-32 sm:mt-12 sm:h-60 md:mt-20 md:h-80"/>
        </div>
      </Container>
      <Carrossel></Carrossel>
      <Galeria></Galeria>
    </div>
    </ChakraProvider>
  );
}

