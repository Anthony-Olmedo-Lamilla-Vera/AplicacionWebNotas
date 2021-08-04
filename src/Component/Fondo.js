import React, { useState } from "react";
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
function Fondo() {
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
  return (
    <div className="back-fondo">
      <img src={Img[Math.floor(Math.random() * 12)]} alt="" />
    </div>
  );
}

export default Fondo;
