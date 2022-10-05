const Reducer = (state, action) => {
  // open mobile menu
  if (action.type === "OPEN_MOBILE_MENU") {
    return { ...state, isMobileMenuOpen: !state.isMobileMenuOpen };
  }
  //   geting search properties
  if (action.type === "GET_SEARCH_PROPERTIES") {
    // const {} = action.payload;
    return {
      ...state,
      searchProperties: action.payload,
    };
  }
  return state;
};

export default Reducer;
