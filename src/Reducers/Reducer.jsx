const Reducer = (state, action) => {
  // open mobile menu
  if (action.type === "OPEN_MOBILE_MENU") {
    return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
  }
  //   geting search properties
  if (action.type === "GET_SEARCH_PROPERTIES") {
    return {
      ...state,
      searchProperties: action.payload,
    };
  }
  // fetching data from api
  if (action.type === "FETCHED_DATA") {
    return { ...state, data: action.payload };
  }
  // get current position
  if (action.type === "GET_CURRENT_POSITION") {
    return { ...state, coordinates: action.payload };
  }
  // get palces lng and lat
  if (action.type === "GET_LAT_AND_LNG") {
    return { ...state, placesLocations: action.payload };
  }
  // get map bounds
  if (action.type === "GET_MAP_BOUND") {
    return { ...state, bounds: action.payload };
  }
  // next testimony
  if (action.type === "NEXT_TESTIMONY") {
    if (state.currentTestimony > action.payload - 1) {
      return { ...state, currentTestimony: (state.currentTestimony = 1) };
    }
    return { ...state, currentTestimony: state.currentTestimony + 1 };
  }
  // previous testimony
  if (action.type === "PREVIOUS_TESTIMONY") {
    if (state.currentTestimony === 1) {
      return {
        ...state,
        currentTestimony: (state.currentTestimony = action.payload - 1),
      };
    }
    return { ...state, currentTestimony: state.currentTestimony - 1 };
  }
  // get single property id
  if (action.type === "SINGLE_PROPERTY_ID") {
    return { ...state, singleProductID: action.payload };
  }
  return state;
};

export default Reducer;
