import * as ActionType from "../Action/ActionType";
const initialState = {
	// cartproducts: [],
	cart: [],
	currentItem: null,
};

const CartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.ADD_TO_CART:
			// Item data from cartproducts array
			// const item = state.cartproducts.find(
			// 	(product) => product.id === action.payload.id
			// );
			// Check if Item is in cart already
			const inCart = state.cart.find((item) =>
				item.id === action.payload.id ? true : false
			);

			return {
				...state,
				cart: inCart
					? state.cart.map((item) =>
							item.id === action.payload.id
								? { ...item, qty: item.qty + 1 }
								: item
					  )
					: [...state.cart],
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
export default CartReducer;
