import { useContext } from "react";
import { RouterContext } from "../context/RouterContext";

const useRouteContext = () => {
  const data = useContext(RouterContext);
  return data;
};

export default useRouteContext;
