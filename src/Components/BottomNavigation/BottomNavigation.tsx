import { FC } from 'react';
import { isEqual } from 'lodash';
import { NavigateFunction, useNavigate } from "react-router-dom";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import {
	InfoOutlined as InfoIcon,
	FormatListBulletedOutlined as ListIcon,
	MessageOutlined as MessageIcon
} from '@mui/icons-material';

import { useStore } from '../../Context/StoreContextProvider';
import { Types } from '../../Context/reducers';

import BottomNavigationStyle from './BottomNavigationStyle';


const FixedBottomNavigation: FC = () => {
	const navigate: NavigateFunction = useNavigate();
	const { state, dispatch } = useStore();

	return (
		<BottomNavigationStyle>
			<BottomNavigation
				showLabels
				value={state.activeBottomNavigation}
				onChange={(_event, newValue: number) => {
					if (isEqual(newValue, 0)) navigate('/ciphers');
					if (isEqual(newValue, 2)) navigate('/about');

					dispatch({
						type: Types.UpdateActiveBottomNavigation,
						payload: newValue
					})
				}}
			>
				<BottomNavigationAction label="Ciphers" icon={<ListIcon />} />
				<BottomNavigationAction disabled label="Active" icon={<MessageIcon />} />
				<BottomNavigationAction label="About" icon={<InfoIcon />} />
			</BottomNavigation>
		</BottomNavigationStyle>
	)
};

export default FixedBottomNavigation;
