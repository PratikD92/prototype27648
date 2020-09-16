import { MAIN_SEARCH_REQUEST, MAIN_SEARCH_SUCCESS, MAIN_SEARCH_FAIL } from "../constants/user_constants";

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

export { mainSearchReducer };