import { fork, all, takeEvery, takeLatest } from "redux-saga/effects";

import {
  getSong,
  getStatics,
  getGenre,
  addSong,
  editSong,
  deleteSong,
} from "../store/slice/song.slice";

import {
  handleGetSong,
  handleGetStatics,
  handleGetGenre,
  handleAddSong,
  handleEditSong,
  handleDeleteSong,
} from "./handlers/song.handler";

function* getSongSaga() {
  yield takeLatest(getSong.type, handleGetSong);
}

function* getStaticsSaga() {
  yield takeLatest(getStatics.type, handleGetStatics);
}
function* getGenreSaga() {
  yield takeLatest(getGenre.type, handleGetGenre);
}

function* addSongSaga() {
  yield takeEvery(addSong.type, handleAddSong);
}
function* editSongSaga() {
  yield takeEvery(editSong.type, handleEditSong);
}
function* deleteSongSaga() {
  yield takeEvery(deleteSong.type, handleDeleteSong);
}

export default function* watcherSaga() {
  yield all([
    fork(getSongSaga),
    fork(getStaticsSaga),
    fork(getGenreSaga),
    fork(addSongSaga),
    fork(editSongSaga),
    fork(deleteSongSaga),
  ]);
}
