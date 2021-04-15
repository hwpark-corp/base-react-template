import { all, put, delay, takeLatest, fork } from 'redux-saga/effects';

import { exampleActions } from 'commons/redux/modules/example';

const { requestIncrement, successIncrement } = exampleActions;

function* increase(): Generator {
  yield delay(1000);
  // yield put(increaseAync.success());
  yield put(successIncrement());
}

function* watchIncrease() {
  // yield takeLatest(increaseAync.request, increase);
  yield takeLatest(requestIncrement, increase);
}

export default function* CounterSaga() {
  yield all([fork(watchIncrease)]);
}
