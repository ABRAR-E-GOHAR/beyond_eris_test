import {
  GET_LIST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
} from "../../Constants/actionTypes";

export const getListRequest = (payload) => ({
  type: GET_LIST,
  payload: payload,
});
export const getListRequestSuccess = (data) => ({
  type: GET_LIST_SUCCESS,
  payload: data,
});
export const getListRequestError = (error) => ({
  type: GET_LIST_ERROR,
  payload: error,
});
