import { useEffect, useReducer } from "react";
import { createContext } from "react";
import Reducer from "../Reducers/Reducer";
import axios from "axios";
// import { data } from "../Pages/Shop/cloneApi";

export const Context = createContext();

const initialState = {
  isMobileMenuOpen: false,
  searchProperties: {},
  data: [],
  loading: true,
  coordinates: {},
  placesLocations: [],
  bounds: {},
  currentTestimony: 1,
  singleProductID: "",
};

const ContextProvider = ({ children }) => {
  // useReducer Hook
  const [state, dispatch] = useReducer(Reducer, initialState);
  // console.log(state.data);
  console.log(state.singleProductID);
  // open mobile menu
  const openMobileMenu = () => {
    dispatch({ type: "OPEN_MOBILE_MENU" });
  };
  // adding search properties
  const addSearchProperties = (properties) => {
    dispatch({ type: "GET_SEARCH_PROPERTIES", payload: properties });
  };
  // next testimony
  const handleNextTestimony = (length) => {
    dispatch({ type: "NEXT_TESTIMONY", payload: length });
  };
  // previous testimony
  const handlePrevTestimony = (length) => {
    dispatch({ type: "PREVIOUS_TESTIMONY", payload: length });
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
  // geting sinle prppery exteernal id
  const getSinglePropertyID = (externalID) => {
    dispatch({ type: "SINGLE_PROPERTY_ID", payload: externalID });
  };
  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://bayut.p.rapidapi.com/properties/list",
      params: {
        locationExternalIDs: "5002,6020",
        purpose: "for-rent",
        hitsPerPage: "25",
        page: "0",
        lang: "en",
        sort: "city-level-score",
        rentFrequency: "monthly",
        categoryExternalID: "4",
      },
      headers: {
        "X-RapidAPI-Key": "96d5c63021mshc715d3e1b56eef3p117ad3jsn4ce74ce1d95e",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        dispatch({ type: "FETCHED_DATA", payload: response?.data?.hits });
        // console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    //single product
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Context.Provider
      value={{
        ...state,
        openMobileMenu,
        addSearchProperties,
        getPlaceLocations,
        getMapBound,
        handleNextTestimony,
        handlePrevTestimony,
        getSinglePropertyID,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
