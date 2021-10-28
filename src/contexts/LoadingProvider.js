import { createContext, useState } from "react";

export const LoadingContext = createContext();

const LoadingProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(true);
  return <LoadingContext.Provider value={[isLoading, setIsloading]}>{children}</LoadingContext.Provider>;
};

export default LoadingProvider;
