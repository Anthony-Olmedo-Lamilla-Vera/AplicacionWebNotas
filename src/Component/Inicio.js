import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Contexto } from "../Context";
import CreacionNote from "./CreacionNote";
import Modal from "./Modal";
import Nota from "./Nota";
import Foto1 from "../Img/FotoCon2.jpg";
import Foto2 from "../Img/Capi.jpg";
import Foto3 from "../Img/Loro.jpg";
import Foto4 from "../Img/Snaucer.jpg";
import Foto5 from "../Img/Max.jpg";
import Foto6 from "../Img/MaxHam.jpg";
import Foto7 from "../Img/pixie.jpg";
import Foto8 from "../Img/Oso.jpg";
import Foto9 from "../Img/FotoAbrazados.jpg";
import Foto10 from "../Img/FotoEncimaMio.jpeg";
import Foto11 from "../Img/FotoEspejo.jpg";
import Foto12 from "../Img/FotoComoBebe.jpeg";

function Inicio() {
  const [Data, setData] = useState([]);
  const [Img, setImg] = useState([
    Foto1,
    Foto2,
    Foto3,
    Foto4,
    Foto5,
    Foto6,
    Foto7,
    Foto8,
    Foto9,
    Foto10,
    Foto11,
    Foto12,
  ]);

  const { Conf, setConf } = useContext(Contexto);
  useEffect(() => {
    obtener();
  }, [Conf]);

  const obtener = async () => {
    await axios
      .get("https://notasbebe.herokuapp.com/")
      .then((response) => setData(response.data));
  };

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
            Persona <i class="bx bxs-heart"></i>TE AMOOOOO!
            <i class="bx bxs-heart"></i>
          </p>
        </div>

        <div className="back-fondo">
          <img src={Img[Math.floor(Math.random() * 12)]} alt="" />
        </div>
        {Conf && (
          <div className="position-modal">
            <Modal />
          </div>
        )}

        <div className="cont_contenido">
          {Data.map((res) => {
            return <Nota titulo={res.titulo} description={res.Descipcion} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Inicio;
