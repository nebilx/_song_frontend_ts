export type MainState = {
	song: {
		data: Data[];
		genre: string[];
		statics: SongData | null;
		isLoading: boolean;
		message: string;
		error: string;
	};
};

export interface SongCount {
	title: number;
	album: number;
	artist: number;
	genre: number;
}

export interface NoSongTotal {
	noSongTotal: SongCount[];
}

export interface NoSongGenre {
	genre: string;
	title: number;
}

export interface NoSongAndAlbumArtist {
	artist: string;
	title: number;
	album: number;
}

export interface NoSongAlbum {
	album: string;
	title: number;
}

export interface SongData {
	noSongTotal: SongCount[];
	noSongGenre: NoSongGenre[];
	noSongAndAlbumArtist: NoSongAndAlbumArtist[];
	noSongAlbum: NoSongAlbum[];
}

export interface BarProp {
	bar?: boolean;
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
	statics: SongData | null;
	genre: string[];
	isLoading: boolean;
	message: string;
	error: string | unknown;
}

export interface AddSongResponseType {
	data: { message: string };
}
export interface EditSongResponseType {
	data: { message: string };
}
export interface DeleteSongResponseType {
	data: { message: string };
}

export interface GetSongResponseType {
	data: { data: Data[] };
}
export interface GetGenreResponseType {
	data: { data: string[] };
}

export interface GetStaticsResponseType {
	data: { data: SongData };
}
