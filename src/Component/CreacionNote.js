import React, { useContext } from "react";
import { Contexto } from "../Context";

function CreacionNote() {
  const { Conf, setConf } = useContext(Contexto);

  return (
    <div className="cont-btn">
      <i class="bx bxs-heart"></i>
      <button onClick={() => setConf(true)} className="btn-crear">
        Crear Nota
        <i className="bx bx-note"></i>
      </button>
    </div>
  );
}

export default CreacionNote;
