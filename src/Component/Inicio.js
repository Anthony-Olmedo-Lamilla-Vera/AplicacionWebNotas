import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Contexto } from "../Context";
import CreacionNote from "./CreacionNote";
import Modal from "./Modal";
import Nota from "./Nota";
import Buttoneliminar from "./Buttoneliminar";
import Fondo from "./Fondo";
import DataNota from "./DataNota";
function Inicio() {
  const { Conf, Eliminar } = useContext(Contexto);

  return (
    <>
      <div className="App">
        <div className="heads">
          <h1>Notas</h1>
          <CreacionNote />
        </div>
        <div className="mensaje">
          <p>
            Hola Mi Bebe ! , Esta pagina la hize para ti mi cielo, Eres la Mujer
            de Mi Vida! ,Estare Siemprre para ti bebe, Eres una increible
            Persona <i className="bx bxs-heart"></i>TE AMOOOOO! MI FUTURA ESPOSA
            <i className="bx bxs-heart"></i>
          </p>
        </div>
        <Fondo />

        {Conf && (
          <div className="position-modal">
            <Modal />
          </div>
        )}

        <div className="cont_contenido">
          <DataNota />
        </div>
      </div>
    </>
  );
}

export default Inicio;
