import { Container } from "@mui/material";
import { ComponentType } from "react";

const withHeightVH = (Component: ComponentType) => () => (
	<Container
		maxWidth="sm"
		sx={{
			padding: '24px 24px 0 24px !important',
			height: '93vh',
			overflow: 'auto'
		}}>
		<Component />
	</Container>
);

export default withHeightVH;
