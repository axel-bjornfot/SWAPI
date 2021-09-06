import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="md">
			<Container>
				<Link to="/" className="navbar-brand">
					<span>Star Wars API</span>
				</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Nav className="ms-auto">
					<NavLink to="/characters" className="nav-link">
						<span>Characters</span>
					</NavLink>
					<NavLink to="/planets" className="nav-link">
						<span>Planets</span>
					</NavLink>
					<NavLink to="/films" className="nav-link">
						<span>Films</span>
					</NavLink>
					<NavLink to="/starships" className="nav-link">
						<span>Starships</span>
					</NavLink>
					<NavLink to="/species" className="nav-link">
						<span>Species</span>
					</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
