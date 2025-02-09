import { LoadingContext } from "@/src/contexts/layout/hook";
import { LoadingType } from "@/src/contexts/layout/types";
import React, { useState } from "react";

export const LoadingContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState<LoadingType>("floating");

  const showLoader = (type: LoadingType = "floating") => {
    setType(type);
    setIsLoading(true);
  };
  const hideLoader = () => {
    setType("floating");
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider
      value={{ isLoading, showLoader, hideLoader, type }}
    >
      {children}
    </LoadingContext.Provider>
  );
};
