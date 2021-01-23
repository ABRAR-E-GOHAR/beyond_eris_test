import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { GET_LIST} from "../../Constants/actionTypes";
import { getListApi } from "../../Apis/listApi";
import { toast } from 'react-toastify';
import {
  getListRequestSuccess,
  getListRequestError,
} from "../actions";

// Get 
const getListRequest = async (payload) => {
  const res = await getListApi({ ...payload });
  return res;
};
function* getList(action) {

  console.log("action from get document ", action.payload);
  const response = yield call(() => getListRequest(action.payload));

  console.log('response', response)
  if (response.status === 200) {

    yield put(getListRequestSuccess(response));
  
  } else {
    yield put(getListRequestError(response));
  
  

  }
}
export function* watchGetList() {
  yield takeLatest(GET_LIST, getList);
}



export default function* rootSaga() {
  yield all([
    fork(watchGetList),


  ]);
}
