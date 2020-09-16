import { GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAIL, GET_ALL_VENDORS_REQUEST, GET_ALL_VENDORS_SUCCESS, GET_ALL_VENDORS_FAIL } from "../constants/admin_redux_constants";

// GET ALL USERS
function getAllUsersReducer(state = { all_users: [] }, action) {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return { loading: true };

    case GET_ALL_USERS_SUCCESS:
      return { loading: false, all_users: action.payload };

    case GET_ALL_USERS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}


// GET ALL VENDORS
function getAllVendorsReducer(state = { all_vendors: [] }, action) {
  switch (action.type) {
    case GET_ALL_VENDORS_REQUEST:
      return { loading: true };

    case GET_ALL_VENDORS_SUCCESS:
      return { loading: false, all_vendors: action.payload };

    case GET_ALL_VENDORS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

export { getAllUsersReducer, getAllVendorsReducer };