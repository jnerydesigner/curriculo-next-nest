"use client";

import { createContext, useState, useContext } from "react";
import { CurriculoRoot } from "../types/curriculo.type";
import { fetchCurriculo } from "@/app/service/fetch-curriculo";

type ContextType = {
  hello: string;
};

const AppContext = createContext<CurriculoRoot>({} as CurriculoRoot);

interface ContextProps {
  children: React.ReactNode;
}

export async function AppWrapper({ children }: ContextProps) {
  const curriculo = await fetchCurriculo();
  const [state, setState] = useState<CurriculoRoot>(curriculo);

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}
