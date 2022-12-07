import { isEqual, replace } from "lodash";
import { FC } from "react";
import { Typography } from "@mui/material";
import { Location, useLocation } from "react-router-dom";


import ReverseCipher from "../ReverseCipher/ReverseCipher";
import ActiveCipherStyle from "./ActiveCipherStyle";

const ActiveCipher: FC = () => {
	const location: Location = useLocation();
	const activeCipher: string = replace(location.pathname, '/ciphers/', '');

	return (
		<ActiveCipherStyle>

			<Typography variant="h5" gutterBottom>
				{ciphersTitle[activeCipher]}
			</Typography>

			{isEqual(activeCipher, 'reverse') && <ReverseCipher />}

		</ActiveCipherStyle>
	)
};

const ciphersTitle: { [key: string]: string } = {
	reverse: 'Reverse'
};

export default ActiveCipher;
