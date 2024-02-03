import { configureStore, combineReducers } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";

import watcherSaga from "../saga/saga";

import songSlice from "./slice/song.slice";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	song: songSlice,
});

const store = configureStore({
	reducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watcherSaga);

export default store;
