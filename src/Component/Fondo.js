import React, { useState } from "react";
import Foto1 from "../Img/FotoCon2-min.jpg";
import Foto2 from "../Img/Capi-min.jpg";
import Foto3 from "../Img/Loro-min.jpg";
import Foto4 from "../Img/Snaucer-min.jpg";
import Foto5 from "../Img/Max-min.jpg";
import Foto6 from "../Img/MaxHam-min.jpg";
import Foto7 from "../Img/pixie-min.jpg";
import Foto8 from "../Img/Oso-min.jpg";
import Foto9 from "../Img/FotoAbrazados-min.jpg";
import Foto10 from "../Img/FotoEncimaMio-min.jpeg";
import Foto11 from "../Img/FotoEspejo-min.jpg";
import Foto12 from "../Img/FotoComoBebe-min.jpeg";
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
      <img loading="lazy" src={Img[Math.floor(Math.random() * 12)]} alt="" />
    </div>
  );
}

export default Fondo;
