import * as ActionType from "../Action/ActionType";

const initialState = {
	products: null,
	loading: false,
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
		default:
			return state;
	}
};
export default ProductsReducer;
