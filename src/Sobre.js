import React from "react";
import "./main.scss";

export default function Sobre() {
  return (
    <div className="sobre">
      <h1>Sobre</h1>

      <p>Somos uma empresa especializada em materiais para interiores há mais de 40 anos</p>
      <p>Nos contate para orçamentos de serviços domésticos ou em ambientes comerciais e indústriais</p>

      <div className="wrap_sobre_pic">
        <picture>
          <img src="loja1.png"/>
        </picture>
        <picture>
          <img src="loja2.png"/>
        </picture>
      </div>
 </div>
  );
}
