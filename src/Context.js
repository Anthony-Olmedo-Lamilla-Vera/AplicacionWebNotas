import React, { createContext, useState } from "react";

export const Contexto = createContext();
function Context({ children }) {
  const [Conf, setConf] = useState(false);
  const [Eliminar, setEliminar] = useState(false);
  return (
    <Contexto.Provider value={{ Conf, setConf, Eliminar, setEliminar }}>
      {children}
    </Contexto.Provider>
  );
}

export default Context;
