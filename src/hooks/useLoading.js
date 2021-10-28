import { useContext } from "react";
import { LoadingContext } from "../contexts/LoadingProvider";

const useLoading = () => {
  return useContext(LoadingContext);
};

export default useLoading;
