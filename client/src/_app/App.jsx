import React from "react";

import { ThemeProvider } from "styled-components";
import theme from "../style-utils/theme.js";
import GlobalStyles from "../style-utils/global.styles.js";

import Routes from "./Routes";

const App = () => (
	<>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes />
		</ThemeProvider>
	</>
);

export default App;
