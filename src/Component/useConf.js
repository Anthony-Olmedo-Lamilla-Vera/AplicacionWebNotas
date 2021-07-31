import { useContext, useEffect, useState } from "react";
import { Contexto } from "../Context";
export function useValor() {
  const { Conf } = useContext(Contexto);
  return Conf;
}
