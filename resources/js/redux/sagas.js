import { all, fork } from "redux-saga/effects";


import listSaga from "./list/saga";





export default function* rootSaga(getState) {
  yield all([
    fork(listSaga),


  ]);
}
