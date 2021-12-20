import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import relatedProducts from "./RelatedProducts";
const rootReducer = combineReducers({
	products: ProductsReducer,
	relatedProducts: relatedProducts,
});

export default rootReducer;
