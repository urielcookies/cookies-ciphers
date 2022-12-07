import { isEqual, replace } from "lodash";
import { FC } from "react";
import { Typography } from "@mui/material";
import { Location, useLocation } from "react-router-dom";

import { CAESAR, REVERSE } from "../../Utils/Constants";

import ReverseCipher from "../ReverseCipher/ReverseCipher";
import CaesarCipher from "../CaesarCipher/CaesarCipher";

import ActiveCipherStyle from "./ActiveCipherStyle";


const ActiveCipher: FC = () => {
	const location: Location = useLocation();
	const activeCipher: string = replace(location.pathname, '/ciphers/', '');

	return (
		<ActiveCipherStyle>

			<Typography variant="h5" gutterBottom>
				{ciphersTitle[activeCipher]}
			</Typography>

			{isEqual(activeCipher, REVERSE) && <ReverseCipher />}
			{isEqual(activeCipher, CAESAR) && <CaesarCipher />}

		</ActiveCipherStyle>
	)
};

const ciphersTitle: { [key: string]: string } = {
	reverse: 'Reverse',
	caesar: 'Caesar'
};

export default ActiveCipher;
