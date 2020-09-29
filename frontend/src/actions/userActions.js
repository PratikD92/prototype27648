import axios from 'axios';
import { MAIN_SEARCH_REQUEST, MAIN_SEARCH_SUCCESS, MAIN_SEARCH_FAIL, TIFFIN_DETAILS_FETCH_REQUEST, TIFFIN_DETAILS_FETCH_SUCCESS, TIFFIN_DETAILS_FETCH_FAIL, CHECKOUT_DETAILS_SUCCESS } from '../constants/user_constants';

// SEARCHING TIFFINS
const MainSearchAction = (area, props) => async (dispatch) => {
  try {
    dispatch({
      type: MAIN_SEARCH_REQUEST
    });

    const { data } = await axios.get('/vendor/get/' + area);
    dispatch({
      type: MAIN_SEARCH_SUCCESS,
      payload: data
    });
  }
  catch (error) {
    dispatch({
      type: MAIN_SEARCH_FAIL,
      payload: error.message
    });
  }
};


// VIEWING TIFFIN DETAILS
const GetTiffinDetailAction = (id, props) => async (dispatch) => {

  try {
    dispatch({
      type: TIFFIN_DETAILS_FETCH_REQUEST
    });

    const { data } = await axios.get('/vendor/get/details/' + id);
    dispatch({
      type: TIFFIN_DETAILS_FETCH_SUCCESS,
      payload: data
    });
  }
  catch (error) {
    dispatch({
      type: TIFFIN_DETAILS_FETCH_FAIL,
      payload: error.message
    });
  }
};

// CHECKOUT ACTION
const CheckoutAction = (data) => async (dispatch) => {
  dispatch({
    type: CHECKOUT_DETAILS_SUCCESS,
    payload: data
  });
};

export { MainSearchAction, GetTiffinDetailAction, CheckoutAction };