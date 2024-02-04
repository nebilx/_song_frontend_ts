import { Container, Content, Logo, Nav, Bar, NavLink } from "./navbar.style";
import { BsMusicNoteList } from "react-icons/bs";
import { useState } from "react";

const Navbar: React.FC = () => {
	const [bar, setBar] = useState<boolean>(false);
	return (
		<Container>
			<Content bar={bar}>
				<Logo>
					<span>
						<BsMusicNoteList />
					</span>
					<h1>Song</h1>
				</Logo>
				<Nav bar={bar}>
					<NavLink to="/">Songs</NavLink>
					<NavLink to="/add">Add Song</NavLink>{" "}
					<NavLink to="/statics">Statics</NavLink>{" "}
				</Nav>
				<Bar bar={bar} onClick={() => setBar(!bar)}>
					<span className="active" />
				</Bar>
			</Content>
		</Container>
	);
};

export default Navbar;
