import { FC } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { map } from "lodash";
import { useNavigate } from "react-router-dom";

import { CipherListData, cipherListData } from "../Utils/CipherListData";


const CipherList: FC = () => {
	const navigate = useNavigate();
	const listOnClickHandler = (link: string) => navigate(link);

	return (
		<List sx={{ padding: '0' }}>
			{map(cipherListData, ({ name, description, link }: CipherListData, index: number) => (
				<ListItem sx={{ padding: '0' }} button key={index + link} onClick={() => listOnClickHandler(link)}>
					<ListItemText primary={name} secondary={description} />
				</ListItem>
			))}
		</List>
	)
};

export default CipherList;
