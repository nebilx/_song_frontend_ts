import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { Data, Song, SongData } from "../../../type";

const initialState: Song = {
	data: [],
	statics: [],
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
		setStatics(state, action: PayloadAction<SongData>) {
			state.statics = action.payload;
		},
		setGenre(state, action: PayloadAction<string[]>) {
			state.genre = action.payload;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		addSong(state, action: PayloadAction<{ data: Data }>) {
			state.isLoading = true;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		editSong(state, action: PayloadAction<{ id: string; data: Data }>) {
			state.isLoading = true;
		},
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		deleteSong(state, action: PayloadAction<{ id: string }>) {
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
		setError(state, action: PayloadAction<string | unknown>) {
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
