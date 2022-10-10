import { useEffect, useReducer } from "react";
import { createContext } from "react";
import Reducer from "../Reducers/Reducer";
import axios from "axios";
import { data } from "../Pages/Shop/cloneApi";

export const Context = createContext();

const initialState = {
  isMobileMenuOpen: false,
  searchProperties: {},
  data: data,
  loading: true,
  coordinates: {},
  placesLocations: [],
  bounds: {},
};

const ContextProvider = ({ children }) => {
  // useReducer Hook
  const [state, dispatch] = useReducer(Reducer, initialState);
  // console.log(state.coordinates);
  // open mobile menu
  const openMobileMenu = () => {
    dispatch({ type: "OPEN_MOBILE_MENU" });
  };
  // adding search properties
  const addSearchProperties = (properties) => {
    dispatch({ type: "GET_SEARCH_PROPERTIES", payload: properties });
  };

  // get current coordinates lat and long
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch({
          type: "GET_CURRENT_POSITION",
          payload: { lat: latitude, lng: longitude },
        });
      }
    );
  }, []);

  // get palces lat and lng function
  const getPlaceLocations = (latAndLng) => {
    dispatch({ type: "GET_LAT_AND_LNG", payload: latAndLng });
  };
  // geting map bound

  const getMapBound = (bounds) => {
    dispatch({ type: "GET_MAP_BOUND", payload: bounds });
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

  return (
    <Context.Provider
      value={{
        ...state,
        openMobileMenu,
        addSearchProperties,
        getPlaceLocations,
        getMapBound,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
