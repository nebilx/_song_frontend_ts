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
	} catch (error) {
		yield put(setIsLoading());
		yield put(setError(error));
	}
}

export function* handleGetStatics() {
	try {
		const statics: GetStaticsResponseType = yield call(request.getStatics);
		yield put(setStatics(statics.data.data));
		yield put(setIsLoading());
	} catch (error) {
		yield put(setIsLoading());
		yield put(setError(error));
	}
}

export function* handleGetGenre() {
	try {
		const genre: GetGenreResponseType = yield call(request.getGenre);
		yield put(setGenre(genre.data.data));
		yield put(setIsLoading());
	} catch (error) {
		yield put(setIsLoading());
		yield put(setError(error));
	}
}

export function* handleAddSong(action: PayloadAction<{ data: Data }>) {
	try {
		const song: AddSongResponseType = yield call(
			request.addSong,
			action.payload,
		);
		yield put(setMessage(song.data.message));
		yield put(setIsLoading());
	} catch (error) {
		yield put(setIsLoading());
		yield put(setError(error));
	}
}

export function* handleEditSong(
	action: PayloadAction<{ id: string; data: Data }>,
) {
	try {
		const song: EditSongResponseType = yield call(
			request.editSong,
			action.payload.id,
			{ data: action.payload.data },
		);
		yield put(setMessage(song.data.message));
		yield put(getSong());
		yield put(setIsLoading());
	} catch (error) {
		yield put(setIsLoading());
		yield put(setError(error));
	}
}

export function* handleDeleteSong(action: PayloadAction<{ id: string }>) {
	try {
		const song: DeleteSongResponseType = yield call(
			request.deleteSong,
			action.payload.id,
		);
		yield put(setMessage(song.data.message));
		yield put(getSong());
		yield put(setIsLoading());
	} catch (error) {
		yield put(setIsLoading());
		yield put(setError(error));
	}
}
