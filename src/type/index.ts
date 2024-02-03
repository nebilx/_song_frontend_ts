export type MainState = {
	song: {
		data: Data[];
		genre: string[];
		statics: SongData[];
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
	noSongTotal: NoSongTotal[];
	noSongGenre: NoSongGenre[];
	noSongAndAlbumArtist: NoSongAndAlbumArtist[];
	noSongAlbum: NoSongAlbum[];
}

export interface ContentProps {
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
	statics: [] | null;
	genre: string[];
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
