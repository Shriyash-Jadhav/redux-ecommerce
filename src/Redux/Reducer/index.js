import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import relatedProducts from "./RelatedProducts";
// import CartReducer from "./CartReducer";
const rootReducer = combineReducers({
	productss: ProductsReducer,
	relatedProducts: relatedProducts,
	// cartReducer: CartReducer,
});

export default rootReducer;
