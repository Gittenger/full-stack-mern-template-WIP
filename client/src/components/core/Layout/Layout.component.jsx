import React from "react";

import Header from "../Header/Header.component";

import {} from "./Layout.styles.jsx";

const Layout = ({ children }) => (
	<>
		<Header />
		<div>{children}</div>
	</>
);

export default Layout;
