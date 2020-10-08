import styled from "styled-components";

import { FlexCenter } from "../../../style-utils/utils.styles";

export const NavContainer = styled.div`
	ul {
		${FlexCenter}

		& > * {
			margin: 2rem;
		}

		a {
			color: blue;
		}
	}
`;
