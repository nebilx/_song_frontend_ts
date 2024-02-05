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
import {
  AddSongResponseType,
  Data,
  DeleteSongResponseType,
  EditSongResponseType,
  ErrorSongResponseType,
  GetGenreResponseType,
  GetSongResponseType,
  GetStaticsResponseType,
} from "../../../type";
import { PayloadAction } from "@reduxjs/toolkit";

export function* handleGetSong() {
  try {
    const song: GetSongResponseType = yield call(request.getSong);
    yield put(setSong(song.data.data));
    yield put(setIsLoading());
  } catch (e: unknown) {
    yield call(handleRequestErrorSaga, e);
  }
}

export function* handleGetStatics() {
  try {
    const statics: GetStaticsResponseType = yield call(request.getStatics);
    yield put(setStatics(statics.data.data));
    yield put(setIsLoading());
  } catch (e: unknown) {
    yield call(handleRequestErrorSaga, e);
  }
}

export function* handleGetGenre() {
  try {
    const genre: GetGenreResponseType = yield call(request.getGenre);
    yield put(setGenre(genre.data.data));
    yield put(setIsLoading());
  } catch (e: unknown) {
    yield call(handleRequestErrorSaga, e);
  }
}

export function* handleAddSong(action: PayloadAction<{ data: Data }>) {
  try {
    const song: AddSongResponseType = yield call(
      request.addSong,
      action.payload.data
    );
    yield put(setMessage(song.data.message));
    yield put(setIsLoading());
  } catch (e: unknown) {
    yield call(handleRequestErrorSaga, e);
  }
}

export function* handleEditSong(
  action: PayloadAction<{ id: string; data: Data }>
) {
  try {
    const song: EditSongResponseType = yield call(
      request.editSong,
      action.payload.id,
      action.payload.data
    );
    yield put(setMessage(song.data.message));
    yield put(getSong());
    yield put(setIsLoading());
  } catch (e: unknown) {
    yield call(handleRequestErrorSaga, e);
  }
}

export function* handleDeleteSong(action: PayloadAction<{ id: string }>) {
  try {
    const song: DeleteSongResponseType = yield call(
      request.deleteSong,
      action.payload.id
    );
    yield put(setMessage(song.data.message));
    yield put(getSong());
    yield put(setIsLoading());
  } catch (e: unknown) {
    yield call(handleRequestErrorSaga, e);
  }
}

export function* handleRequestErrorSaga(e: unknown) {
  let errorMessage = "Unknown error occurred";

  if (typeof e === "object" && e !== null && "response" in e) {
    const response = (
      e as { response?: { data?: { error?: ErrorSongResponseType } } }
    ).response;
    if (
      response &&
      response.data &&
      response.data.error &&
      response.data.error.message
    ) {
      errorMessage = response.data.error.message;
    }
  }

  yield put(setIsLoading());
  yield put(setError(errorMessage));
}
