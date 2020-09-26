import { MAIN_SEARCH_REQUEST, MAIN_SEARCH_SUCCESS, MAIN_SEARCH_FAIL, TIFFIN_DETAILS_FETCH_REQUEST, TIFFIN_DETAILS_FETCH_SUCCESS, TIFFIN_DETAILS_FETCH_FAIL } from "../constants/user_constants";

// TIFFIN SEARCH REDUCER
function mainSearchReducer(state = { searchedVendorsList: [] }, action) {
  switch (action.type) {
    case MAIN_SEARCH_REQUEST:
      return { loading: true };

    case MAIN_SEARCH_SUCCESS:
      return { loading: false, searchedVendorsList: action.payload };

    case MAIN_SEARCH_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};


// TIFFIN DETAILS REDUCER
function tiffinDetailsReducer(state = { tiffin_details_state: [] }, action) {

  switch (action.type) {
    case TIFFIN_DETAILS_FETCH_REQUEST:
      return { loading: true };

    case TIFFIN_DETAILS_FETCH_SUCCESS:
      return { loading: false, tiffin_details_state: action.payload };

    case TIFFIN_DETAILS_FETCH_FAIL:
      return { loading: false, error: action.payload };
    
    default:
      return state;
  }

};

export { mainSearchReducer, tiffinDetailsReducer };