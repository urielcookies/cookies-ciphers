import { createContext, useReducer, Dispatch, useContext } from 'react';
import {
	// reducers
	productReducer,
	shoppingCartReducer,
	activeCipherReducer,
	activeBottomNavigationReducer,

	// interfaces for actions
	ProductActions,
	ShoppingCartActions,
	ActiveCipherActions,
	ActiveBottomNavigationActions,

	ProductType,
} from './reducers';

type InitialStateType = {
	products: ProductType[];
	shoppingCart: number;
	activeCipher: string;
	activeBottomNavigation: number;
}

const initialState = {
	products: [],
	shoppingCart: 0,
	activeCipher: '',
	activeBottomNavigation: 0,
}

const AppContext = createContext<{
	state: InitialStateType;
	dispatch: Dispatch<ProductActions | ShoppingCartActions | ActiveCipherActions | ActiveBottomNavigationActions>;
}>({
	state: initialState,
	dispatch: () => null
});

const mainReducer = (
	{ products, shoppingCart, activeCipher, activeBottomNavigation }: InitialStateType,
	action: ProductActions | ShoppingCartActions | ActiveCipherActions | ActiveBottomNavigationActions
) => ({
	products: productReducer(products, action),
	shoppingCart: shoppingCartReducer(shoppingCart, action),
	activeCipher: activeCipherReducer(activeCipher, action),
	activeBottomNavigation: activeBottomNavigationReducer(activeBottomNavigation, action),
});


const StoreContextProvider = ({ children }: { children: JSX.Element }) => {
	const [state, dispatch] = useReducer(mainReducer, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	)
}

const useStore = () => useContext(AppContext);

export {
	StoreContextProvider,
	useStore,
};