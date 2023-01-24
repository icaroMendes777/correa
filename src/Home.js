import React from "react";
import Galeria1 from './Galeria1';

import "./main.scss";

export default function Home() {
  return (
    <div className="home grid_center">
      
      <div className="intro_home">
      Localizada na cidade de Itajubá, a loja <b>Correa Decorações</b> está há mais de 
      <b> 40 anos</b> na ativa, fornecendo todo tipo de serviço para seu ambiente,
      <b> como vidros, divisórias, box para banheiro</b>, etc.
      </div>

      <Galeria1 />

    
    </div>
  );
}
