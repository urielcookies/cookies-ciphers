// import { createContext, useContext, useState } from 'react';

// interface Store {
// 	store: {
// 		activeUser: string;
// 	};
// 	setStoreHandler: (data: Store["store"]) => void;
// }

// const defaultStore = {
// 	store: {
// 		activeUser: '',
// 	},
// 	setStoreHandler: (data: Store["store"]) => { },
// }

// const StoreContext = createContext<Store>(defaultStore);

// const StoreContextProvider = ({ children }: { children: JSX.Element }) => {
// 	const [store, setStore] = useState<Store["store"]>(defaultStore.store);

// 	const setStoreHandler = (data: Store["store"]) => {
// 		setStore(data);
// 	};

// 	return (
// 		<StoreContext.Provider value={{ store, setStoreHandler }}>
// 			{children}
// 		</StoreContext.Provider>
// 	);
// };

// const useStore = () => useContext(StoreContext);

// export {
// 	StoreContextProvider,
// 	useStore,
// };

// export type { Store };



import React, { createContext, useReducer, Dispatch, useContext } from 'react';
import {
	productReducer,
	shoppingCartReducer,
	activeCipherReducer,
	activeBottomNavigationReducer,

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

// export { StoreContextProvider, AppContext };
const useStore = () => useContext(AppContext);

export {
	StoreContextProvider,
	useStore,
};