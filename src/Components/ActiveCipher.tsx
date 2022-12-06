import { isEqual, replace } from "lodash";
import { FC } from "react";
import { Location, useLocation } from "react-router-dom";

import ReverseCipher from "./ReverseCipher";


const ActiveCipher: FC = () => {
	const location: Location = useLocation();
	const activeCipher: string = replace(location.pathname, '/ciphers/', '');

	return (
		<>
			{isEqual(activeCipher, 'reverse') && <ReverseCipher />}
		</>
	)
};

export default ActiveCipher;
