import React, { createContext, useState } from "react";

export const LoaderContext = createContext(true);

const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const isLoading = (loadingStatus) => {
    setLoading(loadingStatus);
  };

  const value = {
    loading,
    isLoading,
  };

  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};

export default LoaderProvider;
