import { useEffect, useReducer } from "react";
import { createContext } from "react";
import Reducer from "../Reducers/Reducer";
import axios from "axios";

export const Context = createContext();
const initialState = {
  isMobileMenuOpen: false,
  searchProperties: {},
  data: [],
  loading: true,
};

const ContextProvider = ({ children }) => {
  // useReducer Hook
  const [state, dispatch] = useReducer(Reducer, initialState);
  // open mobile menu
  const openMobileMenu = () => {
    dispatch({ type: "OPEN_MOBILE_MENU" });
  };
  // adding search properties
  const addSearchProperties = (properties) => {
    dispatch({ type: "GET_SEARCH_PROPERTIES", payload: properties });
  };

  // fetch data options
  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: {
      locationExternalIDs: "5002,6020",
      purpose: state.searchProperties.purpose,
      hitsPerPage: "25",
      page: "0",
      lang: "en",
      sort: "city-level-score",
      rentFrequency: "monthly",
      categoryExternalID: "4",
    },
    headers: {
      "X-RapidAPI-Key": "481ebb0adamsh7e435c8c9a4c60dp12f70djsnc86badbff00c",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };
  // fetching data method
  // const fetchData = () => {
  //   axios
  //     .request(options)
  //     .then((response) => {
  //       dispatch({ type: "FETCHED_DATA", payload: response });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [state.searchProperties]);
  return (
    <Context.Provider value={{ ...state, openMobileMenu, addSearchProperties }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
