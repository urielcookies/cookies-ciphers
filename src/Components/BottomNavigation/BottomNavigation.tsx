import { FC } from 'react';
import { includes, isEqual, replace } from 'lodash';
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import {
	InfoOutlined as InfoIcon,
	FormatListBulletedOutlined as ListIcon,
	MessageOutlined as MessageIcon
} from '@mui/icons-material';

import { CAESAR, REVERSE } from '../../Utils/Constants';

import BottomNavigationStyle from './BottomNavigationStyle';


const FixedBottomNavigation: FC = () => {
	const navigate: NavigateFunction = useNavigate();
	const location: Location = useLocation();

	const navigationIndexFinder: () => 0 | 1 | 2 | undefined = () => {
		if (isEqual(location.pathname, '/ciphers')) return 0;
		if (includes(cipherList, replace(location.pathname, '/ciphers/', ''))) return 1;
		if (isEqual(location.pathname, '/about')) return 2;
	};

	return (
		<BottomNavigationStyle>
			<BottomNavigation
				showLabels
				value={navigationIndexFinder()}
				onChange={(event, newValue: number) => {
					navigate(['/ciphers', 'null', '/about'][newValue])
				}}
			>
				<BottomNavigationAction label="Ciphers" icon={<ListIcon />} />
				<BottomNavigationAction disabled label="Active" icon={<MessageIcon />} />
				<BottomNavigationAction label="About" icon={<InfoIcon />} />
			</BottomNavigation>
		</BottomNavigationStyle>
	)
};

const cipherList: string[] = [REVERSE, CAESAR];
export default FixedBottomNavigation;
