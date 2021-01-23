import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,

} from "../../Constants/actionTypes";

const INIT_STATE = {
  error: null,
  loadingListButton: false,
  list: null,
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        error: null,
        loadingListButton: true,
      };
    case GET_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        loadingListButton: false,
        list: action.payload.data[0],
      };
    case GET_LIST_ERROR:
      return {
        ...state,
        loadingListButton: false,
        error: action.payload,
      };

  

    default:
      return { ...state };
  }
};
