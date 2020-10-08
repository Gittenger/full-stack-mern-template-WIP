import React from "react";

import { Link } from "react-router-dom";

import { NavContainer } from "./Nav.styles.jsx";

const Nav = () => (
	<NavContainer>
		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				<Link to="/about">About</Link>
			</li>
		</ul>
	</NavContainer>
);

export default Nav;
