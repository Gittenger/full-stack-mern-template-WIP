import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { pages } from "../pages/pages-index.js";

const { HomePage, AboutPage } = pages;

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/about" exact component={AboutPage} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
