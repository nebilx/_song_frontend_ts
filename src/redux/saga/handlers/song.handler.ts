import { call, put } from "redux-saga/effects";
import {
  getSong,
  setSong,
  setStatics,
  setGenre,
  setError,
  setIsLoading,
  setMessage,
} from "../../store/slice/song.slice";
import { request } from "../requests/song.requests";

export function* handleGetSong(action) {
  try {
    const song = yield call(request.getSong);
    yield put(setSong(song.data.data));
    yield put(setIsLoading());
  } catch (error) {
    yield put(setIsLoading());
    yield put(setError(error));
  }
}

export function* handleGetStatics(action) {
  try {
    const statics = yield call(request.getStatics);
    yield put(setStatics(statics.data));
    yield put(setIsLoading());
  } catch (error) {
    yield put(setIsLoading());
    yield put(setError(error.response.data));
  }
}

export function* handleGetGenre(action) {
  try {
    const genre = yield call(request.getGenre);
    yield put(setGenre(genre.data));
    yield put(setIsLoading());
  } catch (error) {
    yield put(setIsLoading());
    yield put(setError(error.response.data));
  }
}

export function* handleAddSong(action) {
  try {
    const song = yield call(request.addSong, action.payload.data);
    yield put(setMessage(song.data.message));
    yield put(setIsLoading());
  } catch (error) {
    yield put(setIsLoading());
    yield put(setError(error.response.data));
  }
}

export function* handleEditSong(action) {
  try {
    const song = yield call(
      request.editSong,
      action.payload.id,
      action.payload.data
    );
    yield put(setMessage(song.data.message));
    yield put(getSong());
    yield put(setIsLoading());
  } catch (error) {
    yield put(setIsLoading());
    yield put(setError(error.response.data));
  }
}

export function* handleDeleteSong(action) {
  try {
    const song = yield call(request.deleteSong, action.payload.id);
    yield put(setMessage(song.data.message));
    yield put(getSong());
    yield put(setIsLoading());
  } catch (error) {
    yield put(setIsLoading());
    yield put(setError(error.response.data));
  }
}
