import Root from "./Routes/Root";
import { StoreContextProvider } from './Context/StoreContextProvider';

const App = () =>
	<StoreContextProvider>
		<Root />
	</StoreContextProvider>;

export default App;
