import axios from "axios";
import { Data } from "../../../type";
axios.defaults.baseURL = "https://song-backend-ts.onrender.com";
export const request = {
	getSong: () =>
		axios.request({
			method: "get",
			url: `/api`,
		}),
	getStatics: () =>
		axios.request({
			method: "get",
			url: `/api/statics`,
		}),
	getGenre: () =>
		axios.request({
			method: "get",
			url: `/api/genre`,
		}),
	addSong: (data: Data) =>
		axios.request({
			method: "post",
			url: `/api`,
			data,
		}),
	editSong: (id: string, data: Data) =>
		axios.request({
			method: "put",
			url: `/api/${id}`,
			data,
		}),
	deleteSong: (id: string) =>
		axios.request({
			method: "delete",
			url: `/api/${id}`,
		}),
};
