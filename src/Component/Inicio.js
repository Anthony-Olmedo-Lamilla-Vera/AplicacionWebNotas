import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Contexto } from "../Context";
import CreacionNote from "./CreacionNote";
import Modal from "./Modal";
import Nota from "./Nota";
import Buttoneliminar from "./Buttoneliminar";
import Fondo from "./Fondo";
import DataNota from "./DataNota";
import Foto9 from "../Img/FotoAbrazados.jpg";
import Foto10 from "../Img/FotoEncimaMio.jpeg";

function Inicio() {
  useEffect(() => {
    if (Notification.permission === "denied") {
      Notification.requestPermission("acepta la notficacion bebe");
    } else Notification.requestPermission();
    if (Notification.permission === "granted") {
      var option = {
        image: Foto9,
        body: "como estas ?? , ven mira las notas preciosa",
        vibrate: navigator.vibrate(2000),
        renotify: true,
        tag: "App de Notas ",
        bage: Foto10,
        requireInteraction: true,
      };
      new Notification("HOLA BEBE", option);
    }
  }, []);
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
