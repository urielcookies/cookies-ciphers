type ActionMap<M extends { [index: string]: any }> = {
	[Key in keyof M]: M[Key] extends undefined
	? {
		type: Key;
	}
	: {
		type: Key;
		payload: M[Key];
	}
};

export enum Types {
	Create = 'CREATE_PRODUCT',
	Delete = 'DELETE_PRODUCT',
	Add = 'ADD_PRODUCT',
	UpdateActiveCipher = 'UPDATE_ACTIVE_CIPHER',
	ResetActiveCipher = 'RESET_ACTIVE_CIPHER',
	UpdateActiveBottomNavigation = 'UPDATE_ACTIVE_BOTTOM_NAVIGATION',
}

// Product

export interface ProductType {
	id: number;
	name: string;
	price: number;
}

interface ProductPayload {
	[Types.Create]: {
		id: number;
		name: string;
		price: number;
	};
	[Types.Delete]: {
		id: number;
	}
}

export type ProductActions =
	ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (
	state: ProductType[],
	action: ProductActions | ShoppingCartActions | ActiveCipherActions | ActiveBottomNavigationActions
) => {
	switch (action.type) {
		case Types.Create:
			return [
				...state,
				{
					id: action.payload.id,
					name: action.payload.name,
					price: action.payload.price,
				}
			]
		case Types.Delete:
			return [
				...state.filter(product => product.id !== action.payload.id),
			]
		default:
			return state;
	}
}

// ShoppingCart

interface ShoppingCartPayload {
	[Types.Add]: undefined;
}

export type ShoppingCartActions =
	ActionMap<ShoppingCartPayload>[keyof ActionMap<ShoppingCartPayload>];

export const shoppingCartReducer = (
	state: number,
	action: ProductActions | ShoppingCartActions | ActiveCipherActions | ActiveBottomNavigationActions
) => {
	switch (action.type) {
		case Types.Add:
			return state + 1;
		default:
			return state;
	}
}


// active cipher
interface ActiveCipherPayload {
	[Types.UpdateActiveCipher]: {
		activeCipher: string;
	};
	[Types.ResetActiveCipher]: undefined;
}

export type ActiveCipherActions =
	ActionMap<ActiveCipherPayload>[keyof ActionMap<ActiveCipherPayload>];

export const activeCipherReducer = (
	state: string,
	action: ProductActions | ShoppingCartActions | ActiveCipherActions | ActiveBottomNavigationActions
) => {
	switch (action.type) {
		case Types.UpdateActiveCipher:
			return action.payload.activeCipher;
		case Types.ResetActiveCipher:
			return '';
		default:
			return state;
	}
}

// active bottom navigation
interface ActiveBottomNavigationPayload {
	[Types.UpdateActiveBottomNavigation]: number;
}

export type ActiveBottomNavigationActions =
	ActionMap<ActiveBottomNavigationPayload>[keyof ActionMap<ActiveBottomNavigationPayload>];

export const activeBottomNavigationReducer = (
	state: number,
	action: ProductActions | ShoppingCartActions | ActiveCipherActions | ActiveBottomNavigationActions
) => {
	switch (action.type) {
		case Types.UpdateActiveBottomNavigation:
			return action.payload;
		default:
			return state;
	}
}