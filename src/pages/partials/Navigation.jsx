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
					<NavLink to="/posts" className="nav-link">
						<span role="img" aria-label="a postal horn">
							📯
						</span>{" "}
						Posts
					</NavLink>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Navigation;
