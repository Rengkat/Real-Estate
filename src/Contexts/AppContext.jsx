import { useReducer } from "react";
import { createContext } from "react";
import Reducer from "../Reducers/Reducer";

export const Context = createContext();
const initialState = {
  isMobileMenuOpen: false,
  searchProperties: {},
};

const ContextProvider = ({ children }) => {
  // open mobile menu
  const openMobileMenu = () => {
    dispatch({ type: "OPEN_MOBILE_MENU" });
  };
  // adding search properties
  const addSearchProperties = (properties) => {
    dispatch({ type: "GET_SEARCH_PROPERTIES", payload: properties });
  };
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={{ ...state, openMobileMenu, addSearchProperties }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
