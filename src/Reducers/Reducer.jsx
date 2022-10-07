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
    return { ...state, data: action.payload?.data?.hits };
  }
  return state;
};

export default Reducer;
