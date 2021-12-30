import * as ActionType from "../Action/ActionType";

const initialState = {
	products: null,
	loading: false,
	cart: [],
	currentItem: null,
	error: null,
};

const ProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.PRODUCTS_REQUEST:
			console.log("Loading");
			return {
				...state,
				loading: true,
			};
		case ActionType.PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				products: action.payload,
			};
		case ActionType.PRODUCTS_FAIL:
			console.log("Error");
			return {
				...state,
				loading: false,
				error: "Errorr",
			};
		case ActionType.ADD_TO_CART:
			// Great Item data from products array
			const item = state.products.find(
				(product) => product.id === action.payload.id
			);
			// Check if Item is in cart already
			const inCart = state.cart.find((item) =>
				item.id === action.payload.id ? true : false
			);

			return {
				...state,
				loading: false,
				cart: inCart
					? state.cart.map((item) =>
						item.id === action.payload.id
							? { ...item, qty: item.qty + 1 }
							: item
					)
					: [...state.cart, { ...item, qty: 1 }],
			};
		case ActionType.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};
		case ActionType.ADJUST_ITEM_QTY:
			return {
				...state,
				cart: state.cart.map((item) =>
					item.id === action.payload.id
						? { ...item, qty: +action.payload.qty }
						: item
				),
			};
		case ActionType.LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};
export default ProductsReducer;


