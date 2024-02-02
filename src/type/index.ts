export type Rstate = {
	song: {
		genre: {
			data: Data[];
		};
		statics: {
			data: Data[];
		} | null;
		isLoading: boolean;
		message: string;
		error: string;
	};
};

export interface Data {
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
	error: string;
}
