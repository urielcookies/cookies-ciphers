import { FC, SyntheticEvent } from 'react';
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

	const navigationOnChange = (_e: SyntheticEvent<Element, Event>, newValue: number) => {
		if (isEqual(newValue, 0)) navigate('/ciphers');
		if (isEqual(newValue, 1)) navigate(`/ciphers/${state.activeCipher}`);
		if (isEqual(newValue, 2)) navigate('/about');

		dispatch({
			type: Types.UpdateActiveBottomNavigation,
			payload: newValue
		})
	}

	return (
		<BottomNavigationStyle>
			<BottomNavigation
				showLabels
				value={state.activeBottomNavigation}
				onChange={navigationOnChange}>
				<BottomNavigationAction label="Ciphers" icon={<ListIcon />} />
				<BottomNavigationAction label="Active" icon={<MessageIcon />} />
				<BottomNavigationAction label="About" icon={<InfoIcon />} />
			</BottomNavigation>
		</BottomNavigationStyle>
	)
};

export default FixedBottomNavigation;
