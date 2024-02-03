import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSong, deleteSong } from "../../redux/store/slice/song.slice";
import { Head } from "../index.style";
import { Table, Container, Icon } from "./getSong.style";
import { BiEdit } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { Data, Rstate } from "../../type";

const Song: React.FC = () => {
	const dispatch = useDispatch();
	const song = useSelector((state: Rstate) => state.song.data);
	const navigate = useNavigate();
	const isLoading = useSelector((state: Rstate) => state.song.isLoading);

	useEffect(() => {
		dispatch(getSong());
	}, [dispatch]);

	return (
		<>
			{isLoading ? (
				<div className="ContainerLoader">
					<span className="loader" />
				</div>
			) : (
				<>
					<Container>
						<Head>Songs</Head>
						<Table>
							<tr>
								<th>No.</th>
								<th>Name</th>
								<th>Artist</th>
								<th>Album</th>
								<th>Genre</th>
								<th>Actions</th>
							</tr>
							{song.data && song.data?.length === 0 && <h1>No song found</h1>}
							{song.data &&
								song.data?.map((data: Data, i: number) => (
									<tr key={i}>
										<td>{i + 1}</td>
										<td>{data.title}</td>
										<td>{data.artist}</td>
										<td>{data.album}</td>
										<td>{data.genre}</td>
										<td>
											{" "}
											<Icon
												color="lime"
												onClick={() => navigate(`/${data._id}`)}
											>
												<span>
													{" "}
													<BiEdit />
												</span>
											</Icon>
											<Icon
												color="red"
												onClick={() =>
													dispatch(deleteSong({ id: data._id ?? "" }))
												}
											>
												<span>
													{" "}
													<AiOutlineDelete />
												</span>
											</Icon>
										</td>
									</tr>
								))}
						</Table>
					</Container>
				</>
			)}{" "}
		</>
	);
};

export default Song;
