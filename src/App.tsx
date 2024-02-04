import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMessage, setError } from "./redux/store/slice/song.slice";
import toast, { Toaster } from "react-hot-toast";
import { MainState } from "./type";

import EditSong from "./components/editSong/editSong";
import AddSong from "./components/addSong/addSong";
import Navbar from "./components/Navbar/Navbar";
import Song from "./components/getSong/getSong";
import Statics from "./components/getStatics/getStatics";

const App: React.FC = () => {
	const message = useSelector((state: MainState) => state.song.message);
	const error = useSelector((state: MainState) => state.song.error);
	const dispatch = useDispatch();

	useEffect(() => {
		if (message !== "") toast.success(message);
		dispatch(setMessage(""));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [message]);

	useEffect(() => {
		if (error !== "") toast.error(error);
		dispatch(setError(""));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

	return (
		<BrowserRouter>
			<Navbar />
			<Toaster />
			<Routes>
				<Route path="/" element={<Song />} />
				<Route path="/add" element={<AddSong />} />
				<Route path="/statics" element={<Statics />} />
				<Route path="/:id" element={<EditSong />} />
				<Route
					path="*"
					element={
						<div>
							<h1>404</h1>
						</div>
					}
				/>
				{/* </Route> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
