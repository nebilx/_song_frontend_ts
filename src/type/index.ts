export type Rstate = {
	song: {
		data: {
			data: Data[];
		};
		genre: {
			data: string[];
		};
		statics: {
			data: Data[];
		} | null;
		isLoading: boolean;
		message: string;
		error: string;
	};
};

export interface ContentProps {
	bar?: boolean; // Using `?` to mark the prop as optional
}

export interface Data {
	_id?: string;
	title: string;
	artist: string;
	album: string;
	genre: string;
}

export interface Song {
	data: Data[];
	statics: Data | null;
	genre: Data[];
	isLoading: boolean;
	message: string;
	error: string | unknown;
}

export interface DeleteSongResponseType {
	data: { message: string };
}

export interface EditSongResponseType {
	data: { data: Data[]; message: string };
}

export interface AddSongResponseType {
	data: { data: Data[]; message: string };
}

export interface GetGenreResponseType {
	data: { data: Data[] };
}

export interface GetStaticsResponseType {
	data: { data: Data };
}

export interface GetSongResponseType {
	data: { data: Data[] };
}
