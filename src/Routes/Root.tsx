import {
	createBrowserRouter,
	createRoutesFromElements,
	Navigate,
	Outlet,
	Route,
	RouterProvider
} from 'react-router-dom';

import CipherList from '../Components/CipherList';
import ActiveCipher from '../Components/ActiveCipher/ActiveCipher';
import About from '../Components/About';

import ErrorPage from '../Components/ErrorPage';
import FixedBottomNavigation from '../Components/BottomNavigation/BottomNavigation';
import withHeightVH from '../HOCs/withHeightVH';
import { BASENAME, PUBLIC_URL } from '../Utils/Constants';


const AppLayout = () => (
	<>
		<Outlet />
		<FixedBottomNavigation />
	</>
);

// Styling applied to views
const CipherListHOC = withHeightVH(CipherList);
const ActiveCipherHOC = withHeightVH(ActiveCipher);
const AboutHOC = withHeightVH(About);

console.info(PUBLIC_URL);

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route element={<AppLayout />} errorElement={<ErrorPage />} >
			<Route path="/" element={<Navigate to="/ciphers" />} />
			<Route path="/ciphers" element={<CipherListHOC />} />
			<Route path="/ciphers/:name" element={<ActiveCipherHOC />} />
			<Route path="/about" element={<AboutHOC />} />
		</Route>
	), { basename: BASENAME, }
);

const Root = () => <RouterProvider router={router} />

export default Root;
