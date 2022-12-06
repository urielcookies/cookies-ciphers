import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Outlet,
	Route,
	RouterProvider
} from 'react-router-dom';
import { Container } from '@mui/material';

import CipherList from '../Components/CipherList';
import ActiveCipher from '../Components/ActiveCipher';
import About from '../Components/About';

import ErrorPage from '../Components/ErrorPage';
import FixedBottomNavigation from '../Components/BottomNavigation/BottomNavigation';


const AppLayout = () => (
	<>
		<Outlet />
		<FixedBottomNavigation />
	</>
);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<AppLayout />} errorElement={<ErrorPage />} >
			<Route path="/" element={<Navigate to='/ciphers' />} />
			<Route path="/ciphers" element={<CipherList />} />
			<Route path="/ciphers/:name" element={<ActiveCipher />} />
			<Route path="/about" element={<About />} />
		</Route>
	)
);

const Root = () => {
	return (
		<Container maxWidth="sm">
			<RouterProvider router={router} />
		</Container>
	)
};

export default Root;
