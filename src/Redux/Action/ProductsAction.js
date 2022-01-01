import * as ActionType from "./ActionType";
import axios from "axios";


export const fetchRelatedProducts = () => async (dispatch) => {
	try {
		dispatch({ type: ActionType.RELATED_PRODUCTS_REQUEST });
		const { data } = await axios.get(
			"https://fakestoreapi.com/products?sort=desc&limit=8"
		);
		dispatch({ type: ActionType.RELATED_PRODUCTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: ActionType.RELATED_PRODUCTS_FAIL });
	}
};

export const addToCart = (itemID) => {
	return {
		type: ActionType.ADD_TO_CART,
		payload: {
			id: itemID,
		},
	};
};

export const removeFromCart = (itemID) => {
	return {
		type: ActionType.REMOVE_FROM_CART,
		payload: {
			id: itemID,
		},
	};
};

export const adjustItemQty = (itemID, qty) => {
	return {
		type: ActionType.ADJUST_ITEM_QTY,
		payload: {
			id: itemID,
			qty,
		},
	};
};

export const loadCurrentItem = (item) => {
	return {
		type: ActionType.LOAD_CURRENT_ITEM,
		payload: item,
	};
};
