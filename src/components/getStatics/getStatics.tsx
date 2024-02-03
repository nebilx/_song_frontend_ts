import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStatics } from "../../redux/store/slice/song.slice";
import { RiAlbumFill, RiFolderMusicFill } from "react-icons/ri";
import { BsFillPersonBadgeFill } from "react-icons/bs";
import { GiSing } from "react-icons/gi";
import { Head } from "../index.style";
import { Container } from "./getStatics.styled";
import { Card, CardContainer } from "./getStatics.styled";
import { Table } from "./getStatics.styled";
import { Rstate, Data } from "../../type/index";

const Statics: React.FC = () => {
	const statics = useSelector((state: Rstate) => state.song.statics);
	const isLoading = useSelector((state: Rstate) => state.song.isLoading);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getStatics());
	}, [dispatch]);

	return (
		<>
			{isLoading ? (
				<div className="ContainerLoader">
					<span className="loader" />
				</div>
			) : (
				<>
					<center>
						<Head>Statics</Head>
					</center>
					<Container>
						<CardContainer>
							<Card>
								<h1>Song</h1>
								<span>
									<GiSing />
								</span>
								<h2>{statics?.data.noSongTotal[0].title}</h2>
							</Card>

							<Card>
								<h1>Album</h1>
								<span>
									<RiAlbumFill />
								</span>
								<h2>{statics?.data.noSongTotal[0].album}</h2>
							</Card>

							<Card>
								<h1>Artist</h1>
								<span>
									<BsFillPersonBadgeFill />
								</span>
								<h2>{statics?.data.noSongTotal[0].artist}</h2>
							</Card>

							<Card>
								<h1>Genre</h1>
								<span>
									<RiFolderMusicFill />
								</span>
								<h2>{statics?.data.noSongTotal[0].genre}</h2>
							</Card>
						</CardContainer>
					</Container>

					<br />
					<Container>
						<Head>No Song & Album In Artist</Head>
						<Table>
							<tr>
								<th>No.</th>
								<th>Artist</th>
								<th>T Album</th>
								<th>T Song</th>
							</tr>

							{statics?.data.noSongAndAlbumArtist.map(
								(data: Data, i: number) => (
									<tr key={i}>
										<td>{i + 1}</td>

										<td>{data.artist}</td>
										<td>{data.album}</td>
										<td>{data.title}</td>
									</tr>
								),
							)}
						</Table>
					</Container>
					<br />
					<Container>
						<Head>No Song Album</Head>
						<Table>
							<tr>
								<th>No.</th>
								<th>Album</th>
								<th>T Song</th>
							</tr>

							{statics?.data.noSongAlbum.map((data: Data, i: number) => (
								<tr key={i}>
									<td>{i + 1}</td>
									<td>{data.album}</td>
									<td>{data.title}</td>
								</tr>
							))}
						</Table>
					</Container>
					<br />
					<Container>
						<Head>No Song Genre</Head>
						<Table>
							<tr>
								<th>No.</th>
								<th>Genre</th>
								<th>T Song</th>
							</tr>

							{statics?.data.noSongGenre.map((data: Data, i: number) => (
								<tr key={i}>
									<td>{i + 1}</td>
									<td>{data.genre}</td>
									<td>{data.title}</td>
								</tr>
							))}
						</Table>
					</Container>
					<br />
				</>
			)}
		</>
	);
};

export default Statics;
