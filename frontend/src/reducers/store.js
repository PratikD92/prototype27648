import { getAllUsersReducer, getAllVendorsReducer } from "./adminReducers";
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { mainSearchReducer, tiffinDetailsReducer } from "./userReducers";

const initialState = {};

const reducer = combineReducers({
  allUsersList: getAllUsersReducer,
  allVendorsList: getAllVendorsReducer,
  searchedVendors: mainSearchReducer,
  tiffinDetails: tiffinDetailsReducer
});

const store = createStore(reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
