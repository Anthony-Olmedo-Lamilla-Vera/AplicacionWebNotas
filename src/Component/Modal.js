import React, { useContext } from "react";
import Axios from "axios";
import { useEffect, useState } from "react";
import { Contexto, contexto } from "../Context";

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
        <img
          src="https://lh3.googleusercontent.com/OyRwVMxgrWL1jhjyxpaczPgY0Vf9lBJSo0gA7T_BAUHM3PYENA8yU6t4RiYkTLDVrHIx_28Q15uPgE-ctC4Tto9-0fsLBKzYAA7iFp1ljS6hPSKms_kN9OoYueMAdiCm_8GwcJjQSE5xIo9x5SoV2FNQhYV_4NvvdynYd43RWqZoHAg2aRc2vB38_xiA_xoUpIsh5aAyfsI15LNQpdIjtfcwdauuQgLX0u6NWNw9x-bfNdPYaLvaZuN5CrgIv5hhFRuy5c2zMFl2zdiFXqG-q9d7-vXscLX9ypnchF64ZybXMweO3JXzn02VyrmpgT-ENwSw2FNcxbQA6985T9fjqnXmjdnyJ-y4WdLjKWPnHhXPPdjMCTjXJpxqO4r_9dXpv9UaGbJHKGBgNNxO769qRea3UN6lJvg4lThkIMBcu-Jw3pt7-ldk5PIMJSpyXBRoHqxijUsJYks9Pd8x3nbPPzgdO37Zl4QSjpo0mKd1KL3pvyPMVktT175IVjU5Wt3CdjS_faGO6CymPc6xL6RDrmNSIbot0qsh1Dyx9RH0lJHx8IB22_0mhUu86GpY-VgnAPA9f8Or3DbCNj20e4YE8SITT5Dn1doHY3f7dsJahf11c9Y03VXfwEfNf14EVNKytGwY3-rpTCPyYyUrbe9SkYZlq3p-5iFa9YrdizTDof2S0xDetylpVMDGWHKyVuhkeA5b-YNqJ6djZ7Kdnbig34A=w118-h166-no?authuser=0"
          alt=""
        />
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
          cols="25"
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
    </div>
  );
}

export default Modal;
