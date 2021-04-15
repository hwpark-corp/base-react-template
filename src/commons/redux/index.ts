import {
  combineReducers,
  MiddlewareArray,
  configureStore,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import { EXAMPLE, exampleReducer } from './modules/example';

const rootReducer = combineReducers({
  [EXAMPLE]: exampleReducer,
});

function rootStore() {
  // saga
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: rootReducer,
    middleware: new MiddlewareArray().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export default rootStore();

export type RootState = ReturnType<typeof rootReducer>;
