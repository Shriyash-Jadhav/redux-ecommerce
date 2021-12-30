import * as ActionType from "./ActionType";
import axios from "axios";

export const fetchAllProducts = () => async (dispatch) => {
	try {
		dispatch({ type: ActionType.PRODUCTS_REQUEST });
		const { data } = await axios.get("https://fakestoreapi.com/products/");
		dispatch({ type: ActionType.PRODUCTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: ActionType.PRODUCTS_FAIL });
	}
};

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

export const addToCart = (dispatch, product) => {
	dispatch({
		type: ActionType.ADD_TO_CART,
		id: product,
	});
};

export const removeFromCart = (product) => {
	return {
		type: ActionType.REMOVE_FROM_CART,
		payload: {
			id: product,
		},
	};
};

export const adjustItemQty = (product, qty) => {
	return {
		type: ActionType.ADJUST_ITEM_QTY,
		payload: {
			id: product,
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
