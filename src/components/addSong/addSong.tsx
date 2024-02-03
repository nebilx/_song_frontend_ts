import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getGenre, addSong } from "../../redux/store/slice/song.slice";
import { Label, Container, Input, Button, Head, Select } from "../index.style";
import { Data, MainState } from "../../type";

const AddSong: React.FC = () => {
	const dispatch = useDispatch();
	const navigator = useNavigate();
	const genre = useSelector((state: MainState) => state.song.genre);
	const isLoading = useSelector((state: MainState) => state.song.isLoading);

	const [song, setSong] = useState<Data>({
		title: "",
		album: "",
		artist: "",
		genre: "",
	});

	const message = useSelector((state: MainState) => state.song.message);

	useEffect(() => {
		if (message !== "") navigator("/");
	}, [message, navigator]);

	useEffect(() => {
		dispatch(getGenre());
	}, [dispatch]);

	return (
		<>
			{isLoading ? (
				<div className="ContainerLoader">
					<span className="loader" />
				</div>
			) : (
				<Container>
					<Head> Add Song</Head>
					<Label htmlFor="title">Name</Label>
					<Input
						type="text"
						name="title"
						onChange={(e) => setSong({ ...song, title: e.target.value })}
						placeholder="Song Name"
						size={20}
						maxLength={20}
						required
					/>
					<Label htmlFor="artist">Artist</Label>
					<Input
						type="text"
						name="artist"
						onChange={(e) => setSong({ ...song, artist: e.target.value })}
						placeholder="Artist Name"
						size={20}
						maxLength={20}
						required
					/>
					<Label htmlFor="album">album</Label>
					<Input
						type="text"
						name="album"
						onChange={(e) => setSong({ ...song, album: e.target.value })}
						placeholder="Album Name"
						size={20}
						maxLength={20}
						required
					/>
					<Label htmlFor="genre">Choose a Genre:</Label>
					<Select
						onChange={(e) =>
							setSong({
								...song,
								genre: e.target.selectedOptions[0]?.value || "",
							})
						}
					>
						<option disabled defaultValue="">
							Select Genre
						</option>
						{genre?.map((data: string, i: number) => (
							<option value={data} key={i}>
								{data}
							</option>
						))}
					</Select>
					<br />
					<br />
					<Button
						type="button"
						onClick={() => {
							dispatch(addSong({ data: song }));
						}}
					>
						Add
					</Button>
				</Container>
			)}
		</>
	);
};

export default AddSong;
