import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Song } from "../../../type";

const initialState: Song = {
	data: [],
	statics: null,
	genre: [],
	isLoading: false,
	message: "",
	error: "",
};

const songSlice = createSlice({
	name: "song",
	initialState,
	reducers: {
		getSong(state) {
			state.isLoading = true;
		},
		getStatics(state) {
			state.isLoading = true;
		},
		getGenre(state) {
			state.isLoading = true;
		},
		setSong(state, action: PayloadAction<Data[]>) {
			state.data = action.payload;
		},
		setStatics(state, action: PayloadAction<Data>) {
			state.statics = action.payload;
		},
		setGenre(state, action: PayloadAction<Data[]>) {
			state.genre = action.payload;
		},
		addSong(state) {
			state.isLoading = true;
		},
		editSong(state) {
			state.isLoading = true;
		},
		deleteSong(state) {
			state.isLoading = true;
		},

		setIsLoading(state) {
			state.isLoading = false;
		},

		//success message
		setMessage(state, action: PayloadAction<string>) {
			state.message = action.payload;
		},
		//error messages
		setError(state, action: PayloadAction<string>) {
			state.error = action.payload;
		},
	},
});

export const {
	getSong,
	getStatics,
	getGenre,
	setSong,
	setStatics,
	setGenre,
	setMessage,
	setError,
	setIsLoading,
	addSong,
	editSong,
	deleteSong,
} = songSlice.actions;

export default songSlice.reducer;
