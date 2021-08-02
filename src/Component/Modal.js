import React, { useContext } from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Contexto } from "../Context";
import Fondo from "../Img/Fondo.jpg";

function Modal() {
  const { Conf, setConf } = useContext(Contexto);

  const [Titulo, setTitulo] = useState("");
  const [Descripcion, setDescripcion] = useState("");
  useEffect(() => {}, [Conf]);
  async function Post() {
    setConf(false);
    await Axios.post("http://localhost:5000/", {
      Titulo: Titulo,
      Descripcion: Descripcion,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="cont-modal">
      <div className="back-modal">
        <img src={Fondo} alt="" />
      </div>
      <div className="titulo-modal">
        <p>Pon un Titulo Bebe</p>
        <input
          value={Titulo}
          onChange={(e) => setTitulo(e.target.value)}
          type="text"
        />
      </div>
      <div className="titulo-modal">
        <p>Pon una descripcion bebe</p>
        <textarea
          value={Descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          name=""
          id=""
          resizable="false"
          cols="33"
          rows="4"
        ></textarea>
      </div>
      <p>Crea la Nota Mi Duende</p>

      <div className="text-modal"></div>
      <div className="cont-btn">
        <button onClick={Post} className="btn-crear">
          Crear Nota
          <i className="bx bx-note"></i>
        </button>
      </div>
      <div className="cont-btn">
        <button onClick={() => setConf(false)} className=" color">
          Cerrar
        </button>
      </div>
    </div>
  );
}

export default Modal;
