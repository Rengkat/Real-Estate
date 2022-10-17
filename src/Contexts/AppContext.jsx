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
  property: {},
  currentTestimony: 1,
  page: "general-purpose",
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
  // next testimony
  const handleNextTestimony = (length) => {
    dispatch({ type: "NEXT_TESTIMONY", payload: length });
  };
  // previous testimony
  const handlePrevTestimony = (length) => {
    dispatch({ type: "PREVIOUS_TESTIMONY", payload: length });
  };
  // 25.2048, 55.2708
  // get current coordinates lat and long
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        dispatch({
          type: "GET_CURRENT_POSITION",
          // 25.2048° N, 55.2708° E
          payload: { lat: latitude, lng: longitude },
        });
      }
    );
  }, []);

  // get palces lat and lng function
  const getPlaceLocations = (latAndLng) => {
    dispatch({ type: "GET_LAT_AND_LNG", payload: latAndLng });
  };
  // geting peroperty info
  const addProperty = (property) => {
    dispatch({ type: "ADD_PROPERTY", payload: property });
  };

  // change page
  // const changePage = (page) => {
  //   dispatch({ type: "CHANGE_PAGE", payload: page });
  // };
  const m = state?.searchProperties && state?.searchProperties;
  console.log(m);
  const fetchData = () => {
    const options = {
      method: "GET",
      url: "https://bayut.p.rapidapi.com/properties/list",
      params: {
        locationExternalIDs: "5002,6020",
        categoryExternalID:
          state?.searchProperties?.categoryExternalID &&
          state?.searchProperties?.categoryExternalID,
        purpose:
          state?.searchProperties?.purpose && state?.searchProperties?.purpose,
        minPrice:
          state?.searchProperties?.minPrice &&
          state?.searchProperties?.minPrice,
        roomsMin:
          state?.searchProperties?.roomsMin &&
          state?.searchProperties?.roomsMin,
        maxPrice:
          state?.searchProperties?.maxPrice &&
          state?.searchProperties?.maxPrice,
        areaMax:
          state?.searchProperties?.areaMax && state?.searchProperties?.areaMax,
        bathsMin:
          state?.searchProperties?.bathsMin &&
          state?.searchProperties?.bathsMin,
        hitsPerPage: "25",
        categoryExternalID:
          state?.searchProperties?.categoryExternalID &&
          state?.searchProperties?.categoryExternalID,
        lang: "en",
        sort: state?.searchProperties?.sort && state?.searchProperties?.sort,
        rentFrequency:
          state?.searchProperties?.rentFrequency &&
          state?.searchProperties?.rentFrequency,
        categoryExternalID: "4",
        furnishingStatus:
          state?.searchProperties?.furnishingStatus &&
          state?.searchProperties?.furnishingStatus,
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
        addProperty,
        handleNextTestimony,
        handlePrevTestimony,
      }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
