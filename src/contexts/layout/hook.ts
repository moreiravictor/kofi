import { createContext, useContext } from "react";
import { LoadingContextType } from "./types";

export const LoadingContext = createContext<LoadingContextType | undefined>(
  undefined
);

export const useLoading = (): LoadingContextType => {
  const context = useContext(LoadingContext);

  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }

  return context;
};
