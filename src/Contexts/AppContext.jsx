import { createContext } from "react";

export const Context = createContext();
const ContextProvider = ({ children }) => {
  const man = "me";
  return <Context.Provider value={{ man }}>{children}</Context.Provider>;
};

export default ContextProvider;
