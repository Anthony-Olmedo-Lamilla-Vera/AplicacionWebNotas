import React, { createContext, useState } from "react";

export const Contexto = createContext();
function Context({ children }) {
  const [Conf, setConf] = useState(false);
  return (
    <Contexto.Provider value={{ Conf, setConf }}>{children}</Contexto.Provider>
  );
}

export default Context;
