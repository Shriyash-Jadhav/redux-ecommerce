import { combineReducers } from "redux";
import productReducer from "./ProductsReducer";
import relatedProducts from "./RelatedProducts";
// import CartReducer from "./CartReducer";
const rootReducer = combineReducers({
	productss: productReducer,
	relatedProducts: relatedProducts,
	// cartReducer: CartReducer,
});

export default rootReducer;
