import * as ActionType from "../Action/ActionType";

const initialState = {
	relatedProducts: null,
	loading: false,
	error: null,
};

const RelatedProductsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.RELATED_PRODUCTS_REQUEST:
			console.log("Loading");
			return {
				...state,
				loading: true,
			};
		case ActionType.RELATED_PRODUCTS_SUCCESS:
			return {
				...state,
				loading: false,
				relatedProducts: action.payload,
			};
		case ActionType.RELATED_PRODUCTS_FAIL:
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
export default RelatedProductsReducer;
