import axios from 'axios';
import { MAIN_SEARCH_REQUEST, MAIN_SEARCH_SUCCESS, MAIN_SEARCH_FAIL } from '../constants/user_constants';


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

export { MainSearchAction };