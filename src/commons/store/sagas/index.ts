// saga
import { call, all } from 'redux-saga/effects';

import example from './example';

export default function* rootSaga() {
  yield all([call(example)]);
}
