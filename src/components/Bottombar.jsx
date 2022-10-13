import React from "react";
import "./Bottombar.css";

function Bottombar() {
  return (
    <div className="bottom">
      <div className="bottom-btn">
        <p className="bg-circle-white">A</p>
        <p>Detalhes</p>
      </div>

      <div className="bottom-btn">
        <p className="bg-circle-white">X</p>
        <p>Habitab</p>
      </div>

      <div className="bottom-btn">
        <p className="bg-circle-white">Y</p>
        <p>Ordenar</p>
      </div>

      <div className="bottom-btn">
        <p className="bg-circle-white">+</p>
        <p>Ver avaliação</p>
      </div>
      <div className="bottom-btn">
        <p className="bg-circle-white">B</p>
        <p>Voltar</p>
      </div>

      {/* <div className="bottom-btn"></div>
      <div className="bottom-btn"></div>
      <div className="bottom-btn"></div> */}
    </div>
  );
}

export default Bottombar;
