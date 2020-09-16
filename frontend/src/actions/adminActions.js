import axios from 'axios';
import { GET_ALL_USERS_REQUEST, GET_ALL_USERS_SUCCESS, GET_ALL_USERS_FAIL, GET_ALL_VENDORS_REQUEST, GET_ALL_VENDORS_SUCCESS, GET_ALL_VENDORS_FAIL } from '../constants/admin_redux_constants';


// GET ALL USERS
const getAllUsersAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_USERS_REQUEST
    });

    const { data } = await axios.get('/user/get/all');
    dispatch({
      type: GET_ALL_USERS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_USERS_FAIL,
      payload: error.message
    });
  }
}


// GET ALL VENDORS
const getAllVendorsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_VENDORS_REQUEST
    });

    const { data } = await axios.get('/vendor/get/all');
    dispatch({
      type: GET_ALL_VENDORS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_VENDORS_FAIL,
      payload: error.message
    });
  }
}

export { getAllUsersAction, getAllVendorsAction };