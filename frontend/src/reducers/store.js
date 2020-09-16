import { getAllUsersReducer, getAllVendorsReducer } from "./adminReducers";
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { mainSearchReducer } from "./userReducers";

const initialState = {};

const reducer = combineReducers({
  allUsersList: getAllUsersReducer,
  allVendorsList: getAllVendorsReducer,
  searchedVendors: mainSearchReducer
});

const store = createStore(reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
