import { FC } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { map } from "lodash";
import { useNavigate } from "react-router-dom";

import { CipherListData, cipherListData } from "../Utils/CipherListData";
import { useStore } from "../Context/StoreContextProvider";
import { Types } from "../Context/reducers";


const CipherList: FC = () => {
	const navigate = useNavigate();
	const { dispatch } = useStore();

	const listOnClickHandler = (link: string) => {
		navigate(link);
		dispatch({
			type: Types.UpdateActiveBottomNavigation,
			payload: 1,
		})
		dispatch({
			type: Types.UpdateActiveCipher,
			payload: {
				activeCipher: link
			},
		})
	}

	return (
		<List sx={{ padding: '0' }}>
			{map(cipherListData, ({ name, description, link }: CipherListData, index: number) => (
				<ListItem sx={{ padding: '0' }} key={index + link} onClick={() => listOnClickHandler(link)}>
					<ListItemText primary={name} secondary={description} />
				</ListItem>
			))}
		</List>
	)
};

export default CipherList;
