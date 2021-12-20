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
			"https://fakestoreapi.com/products?sort=desc&limit=6"
		);
		dispatch({ type: ActionType.RELATED_PRODUCTS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: ActionType.RELATED_PRODUCTS_FAIL });
	}
};
