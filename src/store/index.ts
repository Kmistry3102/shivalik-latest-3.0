import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (g) => g({ thunk: false }).concat(saga),
});

saga.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
